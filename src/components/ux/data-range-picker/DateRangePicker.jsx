import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import useOutsideClickHandler from 'hooks/useOutsideClickHandler';

const inputSyleMap = {
  SECONDARY: 'stay-booker__input--secondary',
  DARK: 'stay-booker__input--dark',
};

const formatKZDate = (date) => {
  if (!date) return '';
  return format(date, 'dd.MM.yyyy', { locale: ru });
};

const DateRangePicker = (props) => {
  const {
    isDatePickerVisible,
    onDatePickerIconClick,
    onDateChangeHandler,
    dateRange,
    setisDatePickerVisible,
    inputStyle,
  } = props;

  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, () => setisDatePickerVisible(false));

  const formattedStartDate = dateRange[0]?.startDate
    ? formatKZDate(dateRange[0].startDate)
    : 'Келу күні';

  const formattedEndDate = dateRange[0]?.endDate
    ? formatKZDate(dateRange[0].endDate)
    : 'Шығу күні';

  return (
    <div className="relative flex" data-testid="date-range-picker">
      {/* Дата заезда */}
      <input
        className={`${
          inputStyle
            ? inputSyleMap[inputStyle]
            : 'stay-booker__input--secondary'
        } stay-booker__input px-8 py-2 w-[50%]`}
        type="text"
        value={formattedStartDate}
        onFocus={onDatePickerIconClick}
        readOnly
      />

      <FontAwesomeIcon
        icon={faCalendar}
        color="#074498"
        className="left-[18px] transform-center-y cursor-pointer"
        onClick={onDatePickerIconClick}
      />

      {/* Дата выезда */}
      <input
        className={`${
          inputStyle
            ? inputSyleMap[inputStyle]
            : 'stay-booker__input--secondary'
        } stay-booker__input px-8 py-2 w-[50%]`}
        type="text"
        value={formattedEndDate}
        onFocus={onDatePickerIconClick}
        readOnly
      />

      {/* Календарь */}
      <div ref={wrapperRef}>
        {isDatePickerVisible && (
          <DateRange
            locale={ru}                 // 🇰🇿 локаль
            editableDateInputs={false}
            onChange={onDateChangeHandler}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            minDate={new Date()}
            direction="horizontal"
            className="sb__date-range-picker"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;
