import { ThemedText, ThemedView } from '@/components';
import { Calendar, DateData } from 'react-native-calendars';
import { useThemeColor } from '@/hooks/useThemeColor';
import { DayState } from 'react-native-calendars/src/types';
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';
import { isDesktop } from '@/utils/screenUtils';

export default function Index() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Calendar
        key={backgroundColor}
        style={{
            //borderColor: colors.surface,
            //backgroundColor: backgroundColor,
        }}
        theme={{
            calendarBackground: backgroundColor,
            /*arrowColor: colors.brand,
            textSectionTitleColor: colors.text,
            dayTextColor: colors.text,
            monthTextColor: colors.text,
            textDisabledColor: colors.gray,*/
            weekVerticalMargin: 0,
        }}
        onDayPress={day => {
            //setSelected(day.dateString);
        }}
        current={'2012-03-01'}
        markedDates={{
            //[selected]: {selected: true, disableTouchEvent: true, selectedColor: colors.gray},
            //  '2012-03-02': {marked: true, dotColor: colors.gray},
        }}
        dayComponent={({date, state, marking}) => {
          return (
            <DayComponent date={date} state={state} marking={marking} /> 
          )
        }}
      />
    </ThemedView>
  );
}

const DayComponent = ({ date, state, marking }: { date: string & DateData | undefined, state: DayState | undefined, marking: MarkingProps | undefined }) => {
  const textColor = useThemeColor({}, 'text');
  const grayColor = useThemeColor({}, 'gray');

  return (
    <ThemedView 
      style={{
        justifyContent: 'center', 
        alignItems: 'center', 
        width: "100%",
        flex: 1,
        borderWidth: isDesktop() ? 1 : 0, 
        borderColor: grayColor,
        height: 0,
        margin: 0,
        padding: 20,
      }}
    >
      <ThemedText style={{ color: state === 'disabled' ? grayColor : textColor }}>
        {date?.day ?? ''}
      </ThemedText>
    </ThemedView>
  );
};