import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const React = require('react');
const dayjs = require('dayjs');
const xDatePickersInternalsDemo = require('@mui/x-date-pickers/internals/demo');
const AdapterDayjs = require('@mui/x-date-pickers/AdapterDayjs').AdapterDayjs;
const LocalizationProvider = require('@mui/x-date-pickers/LocalizationProvider').LocalizationProvider;
const DateTimePicker = require('@mui/x-date-pickers/DateTimePicker').DateTimePicker;

function ResponsiveDateTimePickers() {
  return (
    React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
      React.createElement(xDatePickersInternalsDemo.DemoContainer, { components: ['DateTimePicker'] },
        React.createElement(xDatePickersInternalsDemo.DemoItem, { label: 'Responsive variant' },
          React.createElement(DateTimePicker, { defaultValue: dayjs('2022-04-17T15:30') })
        )
      )
    )
  );
}

module.exports = ResponsiveDateTimePickers;