quicksandfilter
===============

A very simple wrapper for [quicksand](https://github.com/razorjack/quicksand) implementing basic css selector filtering

```
    <button onclick="$('#container').quicksandfilter('')">All</button>
    <button onclick="$('#container').quicksandfilter('.a')">A</button>
    <button onclick="$('#container').quicksandfilter('.b')">B</button>
    <button onclick="$('#container').quicksandfilter('.c')">C</button>
    <button onclick="$('#container').quicksandfilter('.odd')">Odd</button>
    <button onclick="$('#container').quicksandfilter('.even')">Even</button>
    <ul id="container">
      <li class="a odd">a1</li>
      <li class="b even">b2</li>
      <li class="c odd">c3</li>
      <li class="a even">a4</li>
      <li class="b odd">b5</li>
      <li class="c even">c6</li>
      <li class="a odd">a7</li>
      <li class="b even">b8</li>
      <li class="c odd">c9</li>
      <li class="a even">a10</li>
    </ul>
```

