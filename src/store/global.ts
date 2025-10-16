import { observable, action, runInAction } from 'mobx';
import localforage from 'localforage';

const moGlobal = observable({
  theme: '', // 'light' or 'dark'
  isDial: false,
  isLock: false,
  clientWidth: document.documentElement.clientWidth,
  clientHeight: document.documentElement.clientHeight,
});

type themeType = 'light' | 'dark';
const changeTheme = action((themeName: themeType) => {
  moGlobal.theme = themeName;
  localforage.setItem('theme', themeName);
});

const togglaDial = action((value: boolean) => {
  moGlobal.isDial = value;
});

const toggleLock = action((value: boolean) => {
  moGlobal.isLock = value;
});

const changeClient = action((width: number, height: number) => {
  moGlobal.clientWidth = width;
  moGlobal.clientHeight = height;
  // console.log('client width ++ ', width);
  // console.log('client height ++ ', height);
});

export default moGlobal;
export {
  changeTheme, togglaDial, toggleLock, changeClient,
};
