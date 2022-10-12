import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import IconButton from '../IconButton'

const CourseHeader = ({ navigation }) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: COLORS.greeting,
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding * 1.2,
            paddingTop: SIZES.padding * 3,
        },
        flexContainer: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        label: {
            paddingHorizontal: SIZES.padding * .6,
            paddingVertical: SIZES.padding * .5,
            position: 'absolute',
            backgroundColor: COLORS.gray10,
            borderRadius: SIZES.radius * 3,
            top: SIZES.padding * .75,
            left: SIZES.padding * .75
        },
        bookmarkButton: {
            position: 'absolute',
            top: SIZES.padding * .75,
            right: SIZES.padding * .75
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <IconButton icon={icons.back} iconStyle={{
                    tintColor: COLORS.black
                }} onPress={() => navigation.goBack()} />
                <IconButton icon={icons.animation} iconStyle={{
                    tintColor: COLORS.black
                }} />
            </View>

            <View style={{
                position: 'relative',
                marginTop: SIZES.padding * 2
            }}>
                <Image
                    source={dummyData.courses_list_1[0].thumbnail}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: SIZES.height * .25,
                        borderRadius: SIZES.radius * 1.75,

                    }} />
                <Text style={styles.label}>Start July 4</Text>
                <IconButton icon={icons.back} iconStyle={{
                    tintColor: COLORS.black
                }} containerStyle={styles.bookmarkButton} />
            </View>
        </View>
    )
}

export default CourseHeader