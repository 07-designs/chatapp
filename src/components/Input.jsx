import React from 'react'

export const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type Something...'/>
      <div className="send">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5pt3DMXYBybTZ0HeCJ5T1Jc6bpI2zVsWZg&usqp=CAU" alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEUAAAD///9/f3+/v7+5ubnl5eUVFRX7+/t7e3s+Pj43Nzdzc3MREREODg7p6en39/exsbHc3NxGRkZra2syMjIeHh6Xl5fT09OqqqqQkJBRUVGmpqaFhYUqKiqfn59hYWHKysoiIiJYWFgrKys8PDxubm4igKE4AAAExElEQVR4nO3d62KiMBAF4KBFt1a8tVqpVO1W3/8Vl711IZBkAplwdOf8pitfd2a0QohK7iRq6BMIFYGgRSBoEQhaBIIWgaCFClmeD3kxCp3YkMXuUbEkLiR95lFEhkzzjM0RE7LY8DHqkDUrZP3B6ai9+GjHCEm3rI46RD2wQZafvA4Nkr1yQU7MDg2itikPZMzt0CHqZckCeY8OUW9TBsie3dGEqCcGCOs7iAmiug5hMyTld7RBug5hM+Q4EKTjEDZD2GevAdJxCJshs6Eg3YawGTIZDNJpCJshjJ/eXZAuQ9gMieAwQjoMYVCI/xBGhXgPYVSI9xCGhfgOYVyIersXiN8QRoZ4DWFoiM8QxoZ4DGFsiNou7gSiZtQhjA4hD2F4CHUI40OIQ/gGILQhfAsQ0hC+BQhpCN8EhDKEh4VUv2QobAe6h/CwkGrJrKxHOofwsJBqFy/n1kNdQ3hYyL76gjv7sY4hPCzkWnvFJ+uxjiE8LOS9/pJ76zVL+xAeFqL033I6tsR6JX5gyLPt3LwyMCQj/+EEDlGne4Go8b1A6H+Vg0PUpftNAlgQtQkiAYCoWY9bUKAgar43nsVtQcry6nOHExKkpBz6tQoMpMzjdbd/sH3YKnMTEEoEghaBoEUgaBEIWgSCFoGw52O0Gh/fyIfDQorfl0heqQtuQCHbr4/lC+KSG0zIpvJVkP06z1cgIUXt9Wj/JYCQrfbX3nfST+FBNvo3jLRlm3CQovF6tBEMBtHLqszUfi0UE9Ioq8R5KRQS0iyr8h2RuKYACNJSVknyQCssNsjno/cSv7aymn4j/zgLZPTznFL71XE9bWWVeiz7Z4Bk5z8HjulLZtrLymftEANk9XUkeeVlz7LigVwqhxKfpdC3rHggeeXQ5QvhFCa9y4oHUrtZZ+1ukwBlFQHibpMQZcUDyetH29skTFnxQGb1o61tEqiseCBKuxJraZNQZcUEmWu3T5naJFxZMUHUTFtR294mAcuKC6LfwtraJiHLig1S+ZTyK802CVtWfBBXmwQuKz6Io01ClxUjxNYm4cuKE2JuE4ayYoWY2oSjrFgh7W3CU1a8kLY2YSorZkijTeZFy0M0QpQVN0Rvk7b7X4OUFTek0SaNBCordohr3VCosuKH6G1ST7CyigDR26SSgGUVAWJuk5BlFQNiapOgZRUF0tomgcsqDqRlUVrosooDUZOz9g8EL6tIEJXVFm8u/a6bUBMDUs6u1d/htciZHucaB1LW1yk/HvOnS+DT/5dYEPYIBC0CQYtA0CIQtAgELQJBi0DQIhC0CAQtAkGLQNAiELQIBC0CQYtA0CIQtAgELQJBi0DQ8j9DYmyR5p2sAyTGpnXemXSAxNhG0DsX4+maITE2dvSO+TnHZkiMrTa9c+gAibH5qXfMTzk2Q2JsR+ubjflsLRDi03xixnKjtAWScO8F7p0Xy8naIPybaHvG9kRzG4T65IBYsT723wohPTkgWuw7PVohSUp9olqEfNgfMG+HJGv+PdqJeXc8ytwBSRYg7yZt68+8IEmSA3yez9zbpLkhSXodmJJde23IVclitxnMkm12pG0kSJAyy/MhL0aRU+SHc/+NHW8sAkGLQNAiELQIBC0CQcvdQH4A8U5fnrg2v9gAAAAASUVORK5CYII=" alt="" />
        </label>
        <button>
          Send
        </button>
      </div>
    </div>
  )
}
export default Input
