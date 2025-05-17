import * as dateFns from 'date-fns'

import { TZDate } from '@date-fns/tz'

export type DateType = ConstructorParameters<DateConstructor>[0]
export type TZDateType = DateType | TZDate
export type DateInstanceType = Date | TZDate

export type TzName = 'Asia/Ho_Chi_Minh' | 'Asia/Tokyo'

export const datetime = {
	toFormat(date: TZDateType, format: string): string {
		return dateFns.format(date, format)
	},
	getWorkedYears(
		startTime: TZDateType,
		endTime: TZDateType = new Date(),
	): number {
		return dateFns.differenceInYears(endTime, startTime)
	},
	getWorkedHours(
		startTime: TZDateType,
		endTime: TZDateType = new Date(),
	): number {
		const workingDayPerWeek = 5
		const workingHourPerDay = 8

		return (
			dateFns.differenceInWeeks(endTime, startTime) *
			workingDayPerWeek *
			workingHourPerDay
		)
	},
	nowAtTz(timezoneName: TzName = 'Asia/Ho_Chi_Minh'): TZDate {
		return new TZDate(new Date(), timezoneName)
	},
}
