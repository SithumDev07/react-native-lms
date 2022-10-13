import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { CourseHeader, FeaturedButton, WeekCard } from '../../components'
import { COLORS, FONTS, SIZES } from '../../constants'
import { stringAvatar } from '../../utils/usableFunctions'

const StartCourse = () => {

    const navigation = useNavigation()
    const flatListRef = useRef()
    const [activeTab, setActiveTab] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current

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

    const TABS = [
        {
            id: 1,
            tabName: "Schedule",
        },
        {
            id: 2,
            tabName: "Course Details",
        },
    ]

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

    function renderScrollViewContent() {
        switch (activeTab) {
            case 0:
                return (
                    <>
                        <View style={{
                            paddingHorizontal: SIZES.padding,
                            marginTop: SIZES.padding
                        }}>
                            <WeekCard containerStyle={{
                                marginBottom: SIZES.padding
                            }} week={"01"} lesson={"Fundamental Techniques of Writing a Better Code"} description={"If you, just as many developers, have the book called Clean Code, by Robert Cecil Martin (Uncle Bob) in your desk, you know the meaning of clean code is very wide and specialists have their own definitions and even disagree about them. Grady Booch, Software Engineering chief-scientist at Software da IBM Research, for example, is cited by the author because he considers that: “Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer's intent but rather is full of crisp abstractions and straightforward lines of control. However, Michael Feathers, author of Working Effectively with Legacy Code, highlights the word care in a clean codes definition."} isAssignmentDue />
                            <WeekCard containerStyle={{
                                marginBottom: SIZES.padding
                            }} week={"01"} lesson={"Fundamental Techniques of Writing a Better Code"} description={"If you, just as many developers, have the book called Clean Code, by Robert Cecil Martin (Uncle Bob) in your desk, you know the meaning of clean code is very wide and specialists have their own definitions and even disagree about them. Grady Booch, Software Engineering chief-scientist at Software da IBM Research, for example, is cited by the author because he considers that: “Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer's intent but rather is full of crisp abstractions and straightforward lines of control. However, Michael Feathers, author of Working Effectively with Legacy Code, highlights the word care in a clean codes definition."} isAssignmentDue />
                            <WeekCard containerStyle={{
                                marginBottom: SIZES.padding
                            }} week={"01"} lesson={"Fundamental Techniques of Writing a Better Code"} description={"If you, just as many developers, have the book called Clean Code, by Robert Cecil Martin (Uncle Bob) in your desk, you know the meaning of clean code is very wide and specialists have their own definitions and even disagree about them. Grady Booch, Software Engineering chief-scientist at Software da IBM Research, for example, is cited by the author because he considers that: “Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer's intent but rather is full of crisp abstractions and straightforward lines of control. However, Michael Feathers, author of Working Effectively with Legacy Code, highlights the word care in a clean codes definition."} isAssignmentDue />
                        </View>
                    </>
                )
            case 1:
                return (
                    <>
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
                        <View style={{
                            paddingHorizontal: SIZES.padding
                        }}>
                            <Text style={{
                                marginTop: SIZES.padding,
                                ...FONTS.h2
                            }}>Lecturer</Text>
                        </View>
                        <View style={{
                            paddingHorizontal: SIZES.padding,
                            marginTop: SIZES.padding,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity style={{
                                width: SIZES.padding * 3,
                                height: SIZES.padding * 3,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: stringAvatar("Shantha Jayalal").bgcolor,
                                borderRadius: SIZES.radius * 3,
                                borderColor: COLORS.gray10,
                                borderWidth: 2
                            }}>
                                <Text style={{
                                    color: COLORS.additionalColor11,
                                    ...FONTS.h2
                                }}>{stringAvatar("Shantha Jayalal").children}</Text>
                            </TouchableOpacity>

                            <View style={{
                                flex: 1,
                                paddingLeft: SIZES.radius * 1.6
                            }}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                    ...FONTS.h2
                                }}>Shantha Jayalal</Text>
                                <Text style={{
                                    ...FONTS.body4
                                }}>Senior Lecturer, UOK</Text>
                            </View>
                        </View>
                    </>
                )
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <CourseHeader courseImageStyle={courseImageStyle} navigation={navigation} headerStyle={courseHeaderAnimationStyle} />

            <View style={{
                paddingHorizontal: SIZES.padding,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                marginVertical: SIZES.padding
            }}>
                {TABS.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => setActiveTab(index)}
                        key={`tabs-course-${item.id}`}
                        style={{
                            backgroundColor: activeTab === index ? COLORS.primDark : COLORS.gray10,
                            borderRadius: SIZES.radius * 3,
                            paddingVertical: SIZES.padding * .5,
                            paddingHorizontal: SIZES.padding,
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                        <Text style={{
                            color: activeTab === index ? COLORS.gray10 : COLORS.primDark,
                            ...FONTS.body3
                        }}>{item.tabName}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Animated.FlatList
                nestedScrollEnabled
                horizontal
                scrollEnabled={false}
                ref={flatListRef}
                pagingEnabled
                snapToAlignment="center"
                snapToInterval={SIZES.width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                data={TABS}
                keyExtractor={item => `Start-Course-${item.id}`}
                onScroll={Animated.event([
                    {
                        nativeEvent: { contentOffset: { x: scrollX } }
                    }
                ], {
                    useNativeDriver: false
                })}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: SIZES.width,
                            height: '100%',
                            flexGrow: 1
                        }}>
                            <Animated.ScrollView
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
                                }} showsVerticalScrollIndicator={false} contentContainerStyle={{
                                    paddingBottom: 500,
                                    // width: SIZES.width,
                                }}>
                                {renderScrollViewContent()}
                            </Animated.ScrollView>
                        </View>
                    )
                }}
            />
            <FeaturedButton title="Start Course" />
        </View>
    )
}

export default StartCourse