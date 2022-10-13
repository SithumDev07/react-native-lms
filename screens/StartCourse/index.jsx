import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { CourseHeader, FeaturedButton } from '../../components'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const StartCourse = () => {

    const navigation = useNavigation()
    const flatListRef = useRef()
    const [activeTab, setActiveTab] = useState(0)

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
            {/* Header */}
            <CourseHeader navigation={navigation} />

            <View style={{
                paddingHorizontal: SIZES.padding,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                marginTop: SIZES.padding
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

            <FlatList
                nestedScrollEnabled
                horizontal
                ref={flatListRef}
                pagingEnabled
                snapToAlignment="center"
                snapToInterval={SIZES.width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                data={TABS}
                keyExtractor={item => `Start-Course-${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: SIZES.width,
                            height: '100%',
                            flexGrow: 1
                        }}>
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                                paddingBottom: 150,
                                // width: SIZES.width,
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
                    )
                }}
            />
            <FeaturedButton title="Start Course" />
        </View>
    )
}

export default StartCourse