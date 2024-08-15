import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddLeware = ( state: MiddlewareAPI ) => {
  return (next: Dispatch) => (action: Action) => {
    console.log({ state })
  }
}