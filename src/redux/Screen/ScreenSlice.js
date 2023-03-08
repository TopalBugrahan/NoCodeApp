import { createSlice } from "@reduxjs/toolkit";
import { ItemTypes } from "../../ItemType";
export const screenSlice = createSlice({
  name: "screen",
  initialState: {
    myScreens: [
      {
        accepts: [ItemTypes.ELEMENT, ItemTypes.INNER_ELEMENT],
        lastDroppedItem: [],
        count: 0,
      },
    ],
    elements: [
      {
        name: "Button",
        type: ItemTypes.ELEMENT,
        top: null,
        left: null,
        width: 70,
        height: 30,
        isChange: null,
        text: "Button",
        text_color: "#000000",
        font_size: 15,
        backgroundColor: "blue",
        borderColor: "#000000",
        borderWidth: 0,
        borderStyle: null,
        borderRedius: 0,
      },
      {
        name: "Title",
        type: ItemTypes.ELEMENT,
        width: 70,
        height: 30,
        text: "Title",
        text_color: "#000000",
        font_size: 15,
        font_weight: null,
        fontStyle: null,
        textDecoration: null,
        text_align: "left",
        top: null,
        left: null,
        isChange: null,
        backgroundColor: "white",
        borderColor: "#000000",
        borderWidth: 0,
        borderStyle: null,
        borderRedius: 0,
      },
      {
        name: "Text Input",
        type: ItemTypes.ELEMENT,
        top: null,
        left: null,
        isChange: null,
        hint: "...",
        disabled: true,
        keyboard: "text",
        font_size: 15,
        text: "Text Input",
        width: 70,
        height: 30,
        text_color: "#000000",
        backgroundColor: "white",
        borderColor: "#000000",
        borderWidth: 1,
        borderStyle: null,
        borderRedius: 0,
      },
      {
        name: "Image",
        type: ItemTypes.ELEMENT,
        top: null,
        left: null,
        isChange: null,
        width: 90,
        height: 90,
        resize: null,
        src: "image.png",
        borderColor: "#000000",
        borderWidth: 1,
        borderStyle: null,
        borderRedius: 0,
      },
    ],
  },
  reducers: {
    addOnePage: (state) => {
      state.myScreens = [
        ...state.myScreens,
        {
          accepts: [ItemTypes.ELEMENT, ItemTypes.INNER_ELEMENT],
          lastDroppedItem: [],
        },
      ];
    },
    addElementToScreen: (state, action) => {
      state.myScreens[action.payload.index].lastDroppedItem = [
        ...state.myScreens[action.payload.index].lastDroppedItem,
        action.payload.item,
      ];
    },
    changeInnerElementPosition: (state, action) => {
      state.myScreens[action.payload.index].lastDroppedItem[
        action.payload.inner_index
      ].top = action.payload.item.top;
      state.myScreens[action.payload.index].lastDroppedItem[
        action.payload.inner_index
      ].left = action.payload.item.left;
      state.myScreens[action.payload.index].lastDroppedItem[
        action.payload.inner_index
      ].isChange =
        !state.myScreens[action.payload.index].lastDroppedItem[
          action.payload.inner_index
        ].isChange;
    },

    changeWidth: (state, action) => {
      //screenIndex
      //elementIndex
      state.myScreens[action.payload.screenIndex].lastDroppedItem[
        action.payload.index
      ].width = action.payload.width;
    },
    changeHeight: (state, action) => {
      //screenIndex
      //elementIndex
      state.myScreens[action.payload.screenIndex].lastDroppedItem[
        action.payload.index
      ].height = action.payload.height;
    },
    changeSelect: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex } = action.payload;
      state.myScreens.forEach((element) => {
        element.lastDroppedItem.forEach((item) => {
          item.isSelect = false;
        });
      });
      state.myScreens[screenIndex].lastDroppedItem[index].isSelect =
        !state.myScreens[screenIndex].lastDroppedItem[index].isSelect;
    },
    changeTop: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex, change_top } = action.payload;

      state.myScreens[screenIndex].lastDroppedItem[index].top = change_top;
    },
    changeLeft: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex, change_left } = action.payload;

      state.myScreens[screenIndex].lastDroppedItem[index].left = change_left;
    },
    changeText: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex, text } = action.payload;

      state.myScreens[screenIndex].lastDroppedItem[index].text = text;
    },
    changeTextColor: (state, action) => {
      const { index, screenIndex, color1 } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].text_color = color1;
    },
    changeTextAlign: (state, action) => {
      const { index, screenIndex, text_align1 } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].text_align =
        text_align1;
    },
    changeTextDecoration: (state, action) => {
      const { index, screenIndex, textDecoration1 } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].textDecoration =
        textDecoration1;
    },
    changeFontStyle: (state, action) => {
      const { index, screenIndex, fontStyle1 } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].fontStyle =
        fontStyle1;
    },
    changeFontWidth: (state, action) => {
      const { index, screenIndex, font_weight1 } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].font_weight =
        font_weight1;
    },
    changeTextSize: (state, action) => {
      const { index, screenIndex, size } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].font_size = size;
    },
    changeBorderColor: (state, action) => {
      const { index, screenIndex, color1 } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].borderColor = color1;
    },
    changeBorderWidth: (state, action) => {
      const { index, screenIndex, border_width } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].borderWidth =
        border_width;
    },
    changeBorderStyle: (state, action) => {
      const { index, screenIndex, border_style } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].borderStyle =
        border_style;
    },
    changeBackgroundColor: (state, action) => {
      const { index, screenIndex, color1 } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].backgroundColor =
        color1;
    },
    changeBorderRedius: (state, action) => {
      const { index, screenIndex, redius } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].borderRedius = redius;
    },
    changeHint: (state, action) => {
      const { index, screenIndex, hint } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].hint = hint;
    },
    changeKeyboard: (state, action) => {
      const { index, screenIndex, keyboard } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].keyboard = keyboard;
    },
    changeResize: (state, action) => {
      const { index, screenIndex, resize } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].resize = resize;
    },
    changeSrc: (state, action) => {
      const { index, screenIndex, src } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].src = src;
    },
  },
});

/*
Burada örnek bir lastDroppedItem = {name , type, top, left ,ischange,screenindex,elementindex}
*/

export const {
  addOnePage,
  addElementToScreen,
  changeInnerElementPosition,
  changeWidth,
  changeHeight,
  changeSelect,
  changeTop,
  changeLeft,
  changeText,
  changeTextColor,
  changeTextAlign,
  changeTextDecoration,
  changeFontStyle,
  changeFontWidth,
  changeTextSize,
  changeBorderColor,
  changeBorderWidth,
  changeBorderStyle,
  changeBackgroundColor,
  changeBorderRedius,
  changeHint,
  changeKeyboard,
  changeResize,
  changeSrc,
} = screenSlice.actions;
export default screenSlice.reducer;
