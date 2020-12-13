import moment from 'moment-timezone';
import * as R from 'ramda';

export const COMMON = {};

export const MOMENT = {
    now: () => moment.tz(Date.now(), 'Asia/Seoul'),
    formatTo: ({ date, from, to }) => moment(date, from).format(to),
    pastDay: (dayCount) =>
        moment.tz(Date.now(), 'Asia/Seoul').subtract(dayCount, 'days'),
    getDateList: ({ dayCount, format, sort }) => {
        const dateList = [];

        for (let i = 0; i < dayCount; i += 1) {
            const date = moment
                .tz('Asia/Seoul')
                .subtract(i, 'days')
                .format(format);

            if (sort === 'DESC') {
                dateList.push(date);
            } else {
                dateList.unshift(date);
            }
        }

        return dateList;
    },
};

export const UTILS = {
    isValid: R.both(R.complement(R.isNil), R.complement(R.isEmpty)),
    isNotNil: R.complement(R.isNil),
    isNotEmpty: R.complement(R.isEmpty),
};
