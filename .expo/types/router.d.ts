/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/_sitemap` | `/components/Date` | `/components/MyButton` | `/components/addMedButton` | `/components/dateNextDose` | `/components/datetimepicker` | `/components/displayDropdown` | `/components/header` | `/components/horizontalCalendar` | `/components/measurements` | `/components/modalContainer` | `/components/scrollPicker` | `/components/suggestionSearch` | `/data/addMedData` | `/data/medData` | `/images` | `/navigators/appnavigator.component` | `/navigators/mainnavigator.component` | `/navigators/medLibNavigator.component` | `/navigators/mednavigator.component` | `/oldPages/details.component` | `/oldPages/third.component` | `/pages/addMed/addmed.component` | `/pages/addMed/addtimeinterval.component` | `/pages/addMed/dosepertime.component` | `/pages/addMed/duration.component` | `/pages/addMed/editmed.component` | `/pages/addMed/manualscreen.component` | `/pages/addMed/nextdose.component` | `/pages/addMed/scanconfirm.component` | `/pages/addMed/scanscreen.component` | `/pages/addMed/timenextdose.component` | `/pages/home.component` | `/pages/medLibrary.component` | `/stylesheet`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
