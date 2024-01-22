import { ElementSelector } from '../definitions';

function findElementIosTextEquals({ text }: ElementSelector) {
  if (text) {
    return $(
      `-ios class chain:**/XCUIElementTypeAny[\`label == "${text}" OR value == "${text}"\`]`
    );
  } else {
    throw new Error('Unknown selector strategy');
  }
}

function findElementIosTextContains({ text }: ElementSelector) {
  if (text) {
    return $(
      `-ios class chain:**/XCUIElementTypeAny[\`label CONTAINS[c] "${text}" OR CONTAINS[c] "${text}"\`]`
    );
  } else {
    throw new Error('Unknown selector strategy');
  }
}

export { findElementIosTextEquals, findElementIosTextContains }
