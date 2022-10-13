import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import IconButton from '../IconButton'

const WeekCard = ({ week, lesson, description, isAssignmentDue = false, containerStyle }) => {

    const styles = StyleSheet.create({
        container: {
            borderRadius: SIZES.radius,
            borderWidth: .5,
            borderColor: COLORS.gray70,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            ...containerStyle
        },
        week: {
            ...FONTS.body4,
            color: COLORS.gray80
        },
        lesson: {
            ...FONTS.h3,
            color: COLORS.gray90
        },
        description: {
            marginTop: SIZES.radius,
            ...FONTS.body5,
            color: COLORS.gray50
        },
        iconWrapper: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: SIZES.radius
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.week}>Week {week}</Text>
            <Text style={styles.lesson}>{lesson}</Text>
            <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">{description}</Text>
            <View style={styles.iconWrapper}>
                {isAssignmentDue && (
                    <IconButton icon={icons.media} iconStyle={{
                        tintColor: COLORS.black
                    }} />
                )}
            </View>
        </View>
    )
}

export default WeekCard