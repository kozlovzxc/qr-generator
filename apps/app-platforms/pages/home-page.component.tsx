import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import QrPreviewComponent from '../components/qr-preview.component';
import { TabView } from 'react-native-tab-view';
import Markdown from 'react-native-markdown-display';

const FirstRoute = React.memo(
    (props: { value: string; setValue: (newValue: string) => any }) => (
        <View style={[styles.container, styles.editor]}>
            <TextInput
                style={styles.editor__input}
                placeholder="Type anything here..."
                multiline={true}
                value={props.value}
                onChangeText={props.setValue}
            />
        </View>
    ),
);

const SecondRoute = React.memo((props: { value: string }) => (
    <View style={styles.container}>
        <Markdown>{props.value}</Markdown>
    </View>
));

const ThirdRoute = React.memo((props: { value: string }) => (
    <View style={styles.container}>
        <QrPreviewComponent value={props.value} />
    </View>
));

export default function HomePageComponent() {
    const [index, setIndex] = React.useState(0);
    const [value, setValue] = React.useState('');
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' },
    ]);

    const renderScene = ({ route }: any) => {
        switch (route.key) {
            case 'first':
                return <FirstRoute value={value} setValue={setValue} />;
            case 'second':
                return <SecondRoute value={value} />;
            case 'third':
                return <ThirdRoute value={value} />;
            default:
                return <></>;
        }
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    editor: {},
    editor__input: {
        width: '100%',
        height: '100%',
        textAlignVertical: 'top',
    },
    qr: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
