import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CourseHeader, FeaturedButton } from '../../components'
import { useFonts } from 'expo-font'
import { COLORS, FONTS, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const Course = () => {

    const navigation = useNavigation()

    const [loaded] = useFonts({
        Manrope: require('../../assets/fonts/Manrope-Regular.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Italic': require('../../assets/fonts/Poppins-Italic.ttf')
    })

    if (!loaded) {
        return null;
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: 'relative'
        },
        title: {
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.padding,
            ...FONTS.h2
        },
        categoryContainer: {
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.padding * .3,
            alignItems: 'flex-start'
        },
        category: {
            ...FONTS.body3,
            borderWidth: 0.5,
            borderColor: COLORS.primDark,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.padding * .5,
            paddingVertical: SIZES.padding * .1
        },
        commonTitle: {
            paddingHorizontal: SIZES.padding,
            color: COLORS.gray70,
            marginTop: SIZES.padding * .5,
            ...FONTS.h3
        },
        paragraph: {
            paddingHorizontal: SIZES.padding,
            color: COLORS.gray70,
            marginTop: SIZES.padding * .5,
            ...FONTS.body3
        },
        flexContainer: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
    })

    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                height: '100%',
            }}>
                {/* Header */}
                <CourseHeader navigation={navigation} />

                {/* Body */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingBottom: 150,
                }}>
                    <Text style={styles.title}>Programming Concepts</Text>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.category}>Information Technology</Text>
                    </View>
                    <Text style={styles.commonTitle}>About this course</Text>
                    <Text style={styles.paragraph}>
                        In this beginners guide to coding, you will learn the basics used in computer programming languages. As a beginner, you will start learning the fundamentals of coding that you mind find in a “Programming 101” course. We will use some core Java concepts as a starting point that are applicable to most other programming languages.
                    </Text>
                    <View style={[styles.flexContainer, { marginTop: SIZES.padding, paddingHorizontal: SIZES.padding * .5 }]}>
                        <View style={{
                            borderColor: COLORS.gray20,
                            borderWidth: 0.5,
                            borderRadius: SIZES.radius,
                            paddingVertical: 1,
                            marginRight: 3
                        }}>
                            <Text style={styles.commonTitle}>30+</Text>
                            <Text style={styles.paragraph}>Lessons</Text>
                        </View>
                        <View style={{
                            borderColor: COLORS.gray20,
                            borderWidth: 0.5,
                            borderRadius: SIZES.radius,
                            paddingVertical: 1,
                            marginRight: 3
                        }}>
                            <Text style={styles.commonTitle}>4.7</Text>
                            <Text style={styles.paragraph}>Ratings</Text>
                        </View>
                        <View style={{
                            borderColor: COLORS.gray20,
                            borderWidth: 0.5,
                            borderRadius: SIZES.radius,
                            paddingVertical: 1
                        }}>
                            <Text style={styles.commonTitle}>5.7K</Text>
                            <Text style={styles.paragraph}>Enrolled</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <FeaturedButton title="Enroll" />
        </View>
    )
}

export default Course