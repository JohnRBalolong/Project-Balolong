/* Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

body {
  overflow: hidden;
}

.mouse-navigation {
  outline: none;
}

#edit-link-dialog {
  background-color: #fff;
  border: none;
  border-radius: 8px;
  bottom: 0;
  box-shadow: 0 1px 3px 0 rgba(var(--GG800-rgb), 0.3),
      0 4px 8px 3px rgba(var(--GG800-rgb), 0.15);
  margin: auto;
  min-width: 320px;
  padding: 16px;
  top: 0;
  z-index: 10000;
}

html[darkmode=true] #edit-link-dialog {
  background-color: rgb(41, 42, 45);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3),
      0 4px 8px 3px rgba(0, 0, 0, 0.15);
}

#edit-link-dialog::backdrop {
  background: transparent;
}

#edit-link-dialog > div {
  width: 100%;
}

#dialog-title {
  color: rgb(var(--GG900-rgb));
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 16px;
}

html[darkmode=true] #dialog-title {
  color: rgb(var(--GG200-rgb));
}

.field-container {
  margin-bottom: 16px;
}

.field-title {
  color: rgb(var(--GG700-rgb));
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 4px;
}

html[darkmode=true] .field-title {
  color: rgb(var(--GG400-rgb));
}

.input-container {
  position: relative;
}

input {
  background-color: rgb(var(--GG100-rgb));
  border: none;
  border-radius: 4px;
  caret-color: rgb(var(--GB600-rgb));
  color: rgb(var(--GG900-rgb));
  font-size: 13px;
  line-height: 1.6;
  min-height: 32px;
  outline: none;
  padding-inline-end: 8px;
  padding-inline-start: 8px;
  width: calc(100% - 16px);
}

html[dir=rtl] input {
  text-align: right;  /* csschecker-disable-line left-right */
}

html[darkmode=true] input {
  background-color: rgba(0, 0, 0, 0.3);
  caret-color: rgb(var(--GB300-rgb));
  color: rgb(var(--GG200-rgb));
}

input::placeholder {
  color: rgba(var(--GG900-rgb), 0.38);
}

html[darkmode=true] input::placeholder {
  color: rgb(var(--GG500-rgb));
}

.underline {
  border-bottom: 2px solid rgb(var(--GB600-rgb));
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  margin: auto;
  opacity: 0;
  position: absolute;
  right: 0;
  transition: opacity 120ms ease-out, width 0ms linear 180ms;
  width: 0;
}

html[darkmode=true] .underline {
  border-color: rgb(var(--GB300-rgb));
}

input:focus + .underline {
  opacity: 1;
  transition: width 180ms ease-out, opacity 120ms ease-in;
  width: 100%;
}

.field-title.focused {
  color: rgb(var(--GB600-rgb));
}

html[darkmode=true] .field-title.focused {
  color: rgb(var(--GB300-rgb));
}

.error-msg {
  color: rgb(var(--GR600-rgb));
  display: none;
  font-size: 10px;
  font-weight: 400;
  margin-top: 6px;
}

html[darkmode=true] .error-msg {
  color: rgb(var(--GR300-rgb));
}

.invalid label {
  color: rgb(var(--GR600-rgb));
}

html[darkmode=true] .invalid label {
  color: rgb(var(--GR300-rgb));
}

.invalid .error-msg {
  display: block;
}

.invalid .underline {
  border-color: rgb(var(--GR600-rgb));
  opacity: 1;
  transition: width 180ms ease-out, opacity 120ms ease-in;
  width: 100%;
}

html[darkmode=true] .invalid .underline {
  border-color: rgb(var(--GR300-rgb));
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}

.buttons-container span + span {
  margin-inline-start: 16px;
}

#cancel {
  margin-inline-end: 8px;
}