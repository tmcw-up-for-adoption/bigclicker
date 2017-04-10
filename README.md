## bigclicker

[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/bigclicker.svg)](https://greenkeeper.io/)

a remote control for keyboard-driven web presentation systems like [big](https://github.com/tmcw/big).
you can load it on your smartphone or ipad, click left or right, and it emits
keyboard events with [happen](https://github.com/tmcw/happen) that turn
pages for you.

![](http://farm9.staticflickr.com/8084/8450107093_798a368ffd_c.jpg)

load it on a cell phone, run it as a server, include it in your page.

### Install

    git clone https://github.com/tmcw/bigclicker.git
    cd bigclicker
    npm install
    node server.js

Include on your presentation page:

```html
<script src='//localhost:3001/receive.js'></script>
```

Then load it on your iPhone (create an ad-hoc network if necessary).

### How?

With [socket.io](http://socket.io/) for communication, [expressjs](http://expressjs.com/)
as a server [String.replace](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/replace)
as a template layer, and [happen](https://github.com/tmcw/happen) to shoot
real keyboard events to the document.

Designed to work with big, but it should work with any presentation system
that looks at `keyCodes`, responds to arrow keys, and binds its `keydown`
listener on `document`.

### Why?

Because my computer doesn't have one of those IR remote things, and when
you a 'computer on a chair' situation at a meetup, being prone isn't conducive
to rockin.

Also, the slight bit of distrust you should have of a system strung
together with websockets, nodejs, and incarnated browser events should add
that bit of technical-fear that masks any social anxiety you happen to have.
