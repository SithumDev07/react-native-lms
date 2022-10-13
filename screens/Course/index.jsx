import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { CourseHeader, FeaturedButton } from '../../components'
import { COLORS, FONTS, SIZES } from '../../constants'

const Course = () => {

    const navigation = useNavigation()

    const courseHeaderHeight = useSharedValue(SIZES.height * .5)
    const courseImageScale = useSharedValue(1)

    const courseHeaderAnimationStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(courseHeaderHeight.value, {
                duration: 400,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            })
        }
    }, [])

    const courseImageStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: withTiming(courseImageScale.value, {
                        duration: 400,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    })
                }
            ]
        }
    }, [])

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
                <CourseHeader courseImageStyle={courseImageStyle} navigation={navigation} headerStyle={courseHeaderAnimationStyle} />

                {/* Body */}
                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 300,
                    }}
                    scrollEventThrottle={20}
                    onScroll={(event) => {
                        const scrolling = event.nativeEvent.contentOffset.y;

                        if (scrolling > 20) {
                            courseHeaderHeight.value = 100
                            courseImageScale.value = 0
                        } else {
                            courseHeaderHeight.value = SIZES.height * .5
                            courseImageScale.value = 1
                        }
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
                </Animated.ScrollView>
            </View>
            <FeaturedButton title="Enroll" />
        </View>
    )
}

export default Course