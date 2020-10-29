import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { toString } from 'qrcode';
import { useEffect, useState } from 'react';
import { SvgXml } from 'react-native-svg';

interface QRPreviewProps {
    svg?: string;
}

const QRWebPreview = (props: QRPreviewProps) => {
    const b64svg = window.btoa(props.svg || '');
    const svgUrl = 'data:image/svg+xml;base64,' + b64svg;

    // TODO: properly implement web version
    return (
        <img
            src={svgUrl}
            style={{ width: '150px', height: '150px' }}
            alt="QR image"
        />
    );
};

const QRMobilePreview = (props: QRPreviewProps) => {
    const style = StyleSheet.create({
        xml: {
            height: 200,
            padding: 0,
        },
    });
    return props.svg ? <SvgXml xml={props.svg} style={style.xml} /> : <></>;
};

const QrPreviewComponent = React.memo((props: { value: string }) => {
    const [svg, setSvg] = useState<string>('');
    const [text] = useState<string>(props.value || ' ');
    useEffect(() => {
        text &&
            toString(
                text,
                { type: 'svg', errorCorrectionLevel: 'H' },
                (error, string) => {
                    if (error) {
                        // TODO: add error handler
                        return;
                    }
                    setSvg(string);
                },
            );
    }, [text]);
    const QRPlatformComponent =
        Platform.OS === 'web' ? QRWebPreview : QRMobilePreview;
    return <QRPlatformComponent svg={svg} />;
});

export default QrPreviewComponent;
