import { createSlice, current } from "@reduxjs/toolkit";
import { ItemTypes } from "../../ItemType";
export const screenSlice = createSlice({
  name: "screen",
  initialState: {
    globalStyles: [],
    containIndexArray: [],
    nameCount: 0,
    screenCount: 0,
    myScreens: [
      {
        name: "Screen",
        accepts: [ItemTypes.ELEMENT, ItemTypes.INNER_ELEMENT],
        lastDroppedItem: [],
        count: 0,
        isSelect: false,
        backgroundColor: "#FFFFFF",
        backgroundImage: null,
      },
    ],
    elements: [
      {
        actions: [],
        priviteName: "Button",
        name: "Button",
        type: ItemTypes.ELEMENT,
        top: 0,
        left: 0,
        width: 70,
        height: 30,
        text: "Button",
        text_color: "#000000",
        font_size: 15,
        backgroundColor: "blue",
        borderColor: "#000000",
        borderWidth: 0,
        borderStyle: "solid",
        borderRedius: 0,
        visibility: true,
        //
        disabled: null,
        fontStyle: null,
        font_weight: null,
        hint: null,
        items: null,
        keyboard: null,
        offColor: null,
        onColor: null,
        resize: null,
        src: null,
        textDecoration: null,
        text_align: null,
        value: null,
      },
      {
        priviteName: "Title",
        name: "Title",
        type: ItemTypes.ELEMENT,
        width: 70,
        height: 30,
        text: "Title",
        text_color: "#000000",
        font_size: 15,
        font_weight: "normal",
        fontStyle: "normal",
        textDecoration: null,
        text_align: "left",
        top: 0,
        left: 0,
        backgroundColor: "white",
        borderColor: "#000000",
        borderWidth: 0,
        borderStyle: "solid",
        borderRedius: 0,
        actions: [],
        visibility: true,
        //
        disabled: null,
        hint: null,
        items: null,
        keyboard: null,
        offColor: null,
        onColor: null,
        resize: null,
        src: null,
        value: null,
      },
      {
        priviteName: "Text Input",
        name: "Text Input",
        type: ItemTypes.ELEMENT,
        top: 0,
        left: 0,
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
        borderStyle: "solid",
        borderRedius: 0,
        actions: [],
        visibility: true,
        //
        fontStyle: null,
        font_weight: null,
        items: null,
        offColor: null,
        onColor: null,
        resize: null,
        src: null,
        textDecoration: null,
        text_align: null,
        value: null,
      },
      {
        priviteName: "Image",
        name: "Image",
        type: ItemTypes.ELEMENT,
        top: 0,
        left: 0,
        width: 90,
        height: 90,
        resize: "cover",
        src: "image.png",
        borderColor: "#000000",
        borderWidth: 1,
        borderStyle: "solid",
        borderRedius: 0,
        actions: [],
        visibility: true,
        //
        disabled: null,
        font_size: null,
        font_weight: null,
        fontStyle: null,
        hint: null,
        items: null,
        keyboard: null,
        offColor: null,
        onColor: null,
        text: null,
        text_align: null,
        text_color: null,
        textDecoration: null,
        value: null,
        backgroundColor: "white",
      },
      {
        priviteName: "Contain",
        name: "Contain",
        type: ItemTypes.ELEMENT,
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        backgroundColor: "white",
        borderColor: "#808080",
        borderWidth: 1,
        borderStyle: "solid",
        borderRedius: 0,
        items: [],
        actions: [],
        visibility: true,
        //
        disabled: null,
        font_weight: null,
        fontStyle: null,
        font_size: null,
        hint: null,
        keyboard: null,
        offColor: null,
        onColor: null,
        resize: null,
        src: null,
        text: null,
        text_align: null,
        text_color: null,
        textDecoration: null,
        value: null,
      },
      {
        priviteName: "Loading",
        name: "Loading",
        type: ItemTypes.ELEMENT,
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        text_color: "#000000",
        backgroundColor: "white",
        borderColor: "#808080",
        borderWidth: 0,
        borderStyle: "solid",
        borderRedius: 0,
        actions: [],
        visibility: true,
        //
        disabled: null,
        items: null,
        font_weight: null,
        fontStyle: null,
        font_size: null,
        hint: null,
        keyboard: null,
        offColor: null,
        onColor: null,
        resize: null,
        src: null,
        text: null,
        text_align: null,
        textDecoration: null,
        value: null,
      },
      {
        priviteName: "Switch",
        name: "Switch",
        type: ItemTypes.ELEMENT,
        top: 0,
        left: 0,
        disabled: false,
        value: false,
        width: 70,
        height: 30,
        text_color: "#000000",
        backgroundColor: "white",
        borderColor: "#808080",
        borderWidth: 0,
        borderStyle: "solid",
        borderRedius: 0,
        onColor: "#00FF00",
        offColor: "#808080",
        actions: [],
        visibility: true,
        //
        font_weight: null,
        fontStyle: null,
        font_size: null,
        hint: null,
        items: null,
        keyboard: null,
        resize: null,
        src: null,
        text: null,
        text_align: null,
        textDecoration: null,
      },
    ],
  },
  reducers: {
    addOnePage: (state) => {
      state.nameCount++;
      console.log("addOnePage");
      state.myScreens = [
        ...state.myScreens,
        {
          name: "Screen" + state.screenCount,
          accepts: [ItemTypes.ELEMENT, ItemTypes.INNER_ELEMENT],
          lastDroppedItem: [],
          isSelect: false,
          backgroundColor: "#FFFFFF",
          backgroundImage: null,
        },
      ];
      state.screenCount++;
    },
    addElementToScreen: (state, action) => {
      console.log("addElementToScreen");
      state.nameCount++;
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
        element.isSelect = false;
        element.lastDroppedItem.forEach((item) => {
          item.isSelect = false;
          if (item.items !== null) {
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
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].text_color = color1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].text_color = color1;
      }
    },
    changeOnColor: (state, action) => {
      const { index, screenIndex, contain_index, color1 } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].onColor = color1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].onColor = color1;
      }
    },
    changeOffColor: (state, action) => {
      const { index, screenIndex, contain_index, color1 } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].offColor = color1;
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].offColor = color1;
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
      console.log(current(state.containIndexArray));
      console.log("addElementToContain");
      state.nameCount = state.nameCount + 1;
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
          if (item.items !== null) {
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
        ...state.myScreens[screenIndex].lastDroppedItem,
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
    deleteElement: (state, action) => {
      const { screenIndex, index, contain_index } = action.payload;
      if (contain_index !== undefined) {
        state.myScreens[screenIndex].lastDroppedItem[index].items.splice(
          contain_index,
          1
        );
      } else {
        state.myScreens[screenIndex].lastDroppedItem.splice(index, 1);
      }
    },
    addAction: (state, action) => {
      const { screenIndex, index, contain_index } = action.payload;
      if (contain_index === "undefined") {
        state.myScreens[screenIndex].lastDroppedItem[index].actions = [
          ...state.myScreens[screenIndex].lastDroppedItem[index].actions,
          {
            action: "click",
            visibility: "hidden",
            event: null,
            route: null,
            params: null,
          },
        ];
      } else {
        state.myScreens[screenIndex].lastDroppedItem[index].items[
          contain_index
        ].actions = [
          ...state.myScreens[screenIndex].lastDroppedItem[index].items[
            contain_index
          ].actions,
          {
            action: "click",
            visibility: "hidden",
            event: null,
            route: null,
            params: {
              selectEmail: null,
              selectPassport: null,
              selectTitle: null,
              selectCostum: null,
              backgroundColor: null,
              width: null,
              height: null,
              top: null,
              left: null,
            },
          },
        ];
      }
    },
    changeVisibility: (state, action) => {
      const { screenIndex, index, contain_index, action_index } =
        action.payload;
      let data = state.myScreens[screenIndex].lastDroppedItem[index];
      if (contain_index !== "undefined") {
        data =
          state.myScreens[screenIndex].lastDroppedItem[index].items[
            contain_index
          ];
      }
      data.actions.forEach(({ visibility }, index) => {
        if (index === action_index) {
          if (data.actions[action_index].visibility === "visible") {
            data.actions[action_index].visibility = "hidden";
          } else {
            data.actions[action_index].visibility = "visible";
          }
        } else {
          data.actions[index].visibility = "hidden";
        }
      });
    },
    selectAction: (state, action) => {
      const { screenIndex, index, contain_index, action_index, event, params } =
        action.payload;
      let data = state.myScreens[screenIndex].lastDroppedItem[index];
      if (contain_index !== "undefined") {
        data =
          state.myScreens[screenIndex].lastDroppedItem[index].items[
            contain_index
          ];
      }
      data.actions[action_index].route = null;
      data.actions[action_index].event = event;
      data.actions[action_index].params = params;
    },
    selectRoute: (state, action) => {
      const { screenIndex, index, contain_index, action_index, route } =
        action.payload;
      let data = state.myScreens[screenIndex].lastDroppedItem[index];
      if (contain_index !== "undefined") {
        data =
          state.myScreens[screenIndex].lastDroppedItem[index].items[
            contain_index
          ];
      }
      data.actions[action_index].route = route;
    },
    deleteScreen: (state, action) => {
      const { screenIndex } = action.payload;
      state.myScreens.splice(screenIndex, 1);
    },
    changeScreenSelect: (state, action) => {
      //screenIndex
      //elementIndex
      const { screenIndex } = action.payload;
      state.myScreens.forEach((element) => {
        element.isSelect = false;
        element.lastDroppedItem.forEach((item) => {
          item.isSelect = false;
          if (item.items !== null) {
            item.items.forEach((contain_element) => {
              contain_element.isSelect = false;
            });
          }
        });
      });
      state.myScreens[screenIndex].isSelect =
        !state.myScreens[screenIndex].isSelect;
    },
    changeScreenColor: (state, action) => {
      const { screenIndex, color1 } = action.payload;
      state.myScreens[screenIndex].backgroundColor = color1;
    },
    changeScreenImage: (state, action) => {
      const { screenIndex, src } = action.payload;
      state.myScreens[screenIndex].backgroundImage = src;
    },
    addGlobalStyle: (state, action) => {
      const { select, styleName } = action.payload;
      state.globalStyles = [
        ...state.globalStyles,
        {
          styleName,
          name: select,
          styles: {
            font_size: null,
            text_color: null,
            backgroundColor: "white",
            borderColor: "#000000",
            borderWidth: 1,
            borderStyle: "solid",
            borderRedius: 0,
            fontStyle: null,
            font_weight: null,
            offColor: null,
            onColor: null,
            resize: null,
            textDecoration: null,
            text_align: null,
          },
        },
      ];
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
  changeOffColor,
  changeOnColor,
  deleteElement,
  addAction,
  changeVisibility,
  selectAction,
  selectRoute,
  deleteScreen,
  changeScreenSelect,
  changeScreenColor,
  changeScreenImage,
  addGlobalStyle,
} = screenSlice.actions;
export default screenSlice.reducer;
