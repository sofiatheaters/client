import React, { Component } from 'react'
import { Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";

const focusFilterInput = (e) => {
  document.getElementById('filter-input').focus()
  e.preventDefault()
}

class AppHotkeys extends Component {

  renderHotkeys() {
    return <Hotkeys>
      <Hotkey
        global={true}
        combo="s"
        label="Focus the search box"
        onKeyDown={focusFilterInput}
      />
    </Hotkeys>;
  }

  render() {
    return null
  }

}

HotkeysTarget(AppHotkeys)
export default AppHotkeys
