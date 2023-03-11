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
      {
        name: "Contain",
        type: ItemTypes.ELEMENT,
        top: null,
        left: null,
        isChange: null,
        width: 200,
        height: 200,
        backgroundColor: "blue",
        borderColor: "#000000",
        borderWidth: 0,
        borderStyle: null,
        borderRedius: 0,
        items: [],
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
      const { screenIndex, index, left, top } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].top = top;
      state.myScreens[screenIndex].lastDroppedItem[index].left = left;
      state.myScreens[screenIndex].lastDroppedItem[index].isChange =
        !state.myScreens[screenIndex].lastDroppedItem[index].isChange;
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
          if (item.items !== undefined) {
            item.items.forEach((contain_element) => {
              contain_element.isSelect = false;
            });
          }
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
    changeContainTop: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex, contain_index, change_top } = action.payload;

      state.myScreens[screenIndex].lastDroppedItem[index].items[
        contain_index
      ].top = change_top;
    },
    changeLeft: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex, change_left } = action.payload;

      state.myScreens[screenIndex].lastDroppedItem[index].left = change_left;
    },
    changeContainLeft: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex, contain_index, change_left } = action.payload;

      state.myScreens[screenIndex].lastDroppedItem[index].items[
        contain_index
      ].left = change_left;
    },
    changeText: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex, contain_index, text } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].text = text;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].text = text;
      }
    },
    changeTextColor: (state, action) => {
      const { index, screenIndex, contain_index, color1 } = action.payload;
      console.log(contain_index, color1);
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].text_color = color1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].text_color = color1;
      }
    },
    changeTextAlign: (state, action) => {
      const { index, screenIndex, contain_index, text_align1 } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].text_align = text_align1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].text_align =
          text_align1;
      }
    },
    changeTextDecoration: (state, action) => {
      const { index, screenIndex, contain_index, textDecoration1 } =
        action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].textDecoration = textDecoration1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].textDecoration =
          textDecoration1;
      }
    },
    changeFontStyle: (state, action) => {
      const { index, screenIndex, contain_index, fontStyle1 } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].fontStyle = fontStyle1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].fontStyle =
          fontStyle1;
      }
    },
    changeFontWidth: (state, action) => {
      const { index, screenIndex, contain_index, font_weight1 } =
        action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].font_weight = font_weight1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].font_weight =
          font_weight1;
      }
    },
    changeTextSize: (state, action) => {
      const { index, screenIndex, contain_index, size } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].font_size = size;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].font_size = size;
      }
    },
    changeBorderColor: (state, action) => {
      const { index, screenIndex, contain_index, color1 } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].borderColor = color1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].borderColor =
          color1;
      }
    },
    changeBorderWidth: (state, action) => {
      const { index, screenIndex, contain_index, border_width } =
        action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].borderWidth = border_width;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].borderWidth =
          border_width;
      }
    },
    changeBorderStyle: (state, action) => {
      const { index, screenIndex, contain_index, border_style } =
        action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].borderStyle = border_style;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].borderStyle =
          border_style;
      }
    },
    changeBackgroundColor: (state, action) => {
      const { index, screenIndex, contain_index, color1 } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].backgroundColor = color1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].backgroundColor =
          color1;
      }
    },
    changeBorderRedius: (state, action) => {
      const { index, screenIndex, contain_index, redius } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].borderRedius = redius;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].borderRedius =
          redius;
      }
    },
    changeHint: (state, action) => {
      const { index, screenIndex, contain_index, hint } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].hint = hint;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].hint = hint;
      }
    },
    changeKeyboard: (state, action) => {
      const { index, screenIndex, contain_index, keyboard } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].keyboard = keyboard;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].keyboard = keyboard;
      }
    },
    changeResize: (state, action) => {
      const { index, screenIndex, contain_index, resize } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].resize = resize;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].resize = resize;
      }
    },
    changeSrc: (state, action) => {
      const { index, screenIndex, contain_index, src } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].src = src;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].src = src;
      }
    },
    addElementToContain: (state, action) => {
      state.myScreens[action.payload.screenIndex].lastDroppedItem[
        action.payload.inner_index
      ].items = [
        ...state.myScreens[action.payload.screenIndex].lastDroppedItem[
          action.payload.inner_index
        ].items,
        action.payload.item,
      ];
    },
    changeContainWidth: (state, action) => {
      const { screenIndex, index, contain_index, width } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].items[
        contain_index
      ].width = width;
    },
    changeContainHeight: (state, action) => {
      const { screenIndex, index, contain_index, height } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].items[
        contain_index
      ].height = height;
    },
    changeContainInnerElementPosition: (state, action) => {
      state.myScreens[action.payload.screenIndex].lastDroppedItem[
        action.payload.index
      ].items[action.payload.inner_index].top = action.payload.item.top;
      state.myScreens[action.payload.screenIndex].lastDroppedItem[
        action.payload.index
      ].items[action.payload.inner_index].left = action.payload.item.left;
    },
    changeContainSelect: (state, action) => {
      //screenIndex
      //elementIndex
      const { index, screenIndex, contain_index } = action.payload;
      state.myScreens.forEach((element) => {
        element.lastDroppedItem.forEach((item) => {
          item.isSelect = false;
          if (item.items !== undefined) {
            item.items.forEach((contain_element) => {
              contain_element.isSelect = false;
            });
          }
        });
      });
      state.myScreens[screenIndex].lastDroppedItem[index].items[
        contain_index
      ].isSelect =
        !state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].isSelect;
    },
    changeContainElementToScreenElement: (state, action) => {
      const { index, inner_index, left, top, screenIndex } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[index].items[
        inner_index
      ].left = left;
      state.myScreens[screenIndex].lastDroppedItem[index].items[
        inner_index
      ].top = top;
      state.myScreens[screenIndex].lastDroppedItem = [
        ...state.myScreens[index].lastDroppedItem,
        state.myScreens[screenIndex].lastDroppedItem[index].items[inner_index],
      ];
      state.myScreens[screenIndex].lastDroppedItem[index].items.splice(
        inner_index,
        1
      );
    },
    changeScreenToContainElement: (state, action) => {
      const { screenIndex, inner_index, left, top, index } = action.payload;
      state.myScreens[screenIndex].lastDroppedItem[inner_index].left = left;
      state.myScreens[screenIndex].lastDroppedItem[inner_index].top = top;
      state.myScreens[screenIndex].lastDroppedItem[index].items = [
        ...state.myScreens[screenIndex].lastDroppedItem[index].items,
        state.myScreens[screenIndex].lastDroppedItem[inner_index],
      ];
      state.myScreens[screenIndex].lastDroppedItem.splice(inner_index, 1);
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
  addElementToContain,
  changeContainWidth,
  changeContainHeight,
  changeContainInnerElementPosition,
  changeContainSelect,
  changeContainElementToScreenElement,
  changeScreenToContainElement,
  changeContainTop,
  changeContainLeft,
} = screenSlice.actions;
export default screenSlice.reducer;
