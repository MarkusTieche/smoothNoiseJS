![div](https://raw.githubusercontent.com/inkfood/smoothNoise/master/images/noise_subDivision_1.png)

# smoothNoise.js

Includes two examples


Init Noise

`var noise = new smoothNoise();`

set noise values(optional), these are the basic values 

`noise.frequency = 10`
`noise.subDivision = 10`
`noise.highLimit = 300`
`noise.lowLimit = 500`
`noise.lastPos = {x:0,y:0}`
`noise.points = []`
`noise.width = window.innerWidth`

add noise to the full width with
`noise.fill()`

add one slope at `noise.lastPos` with
`noise.add()`


By markusT, [inkfood.com](http://www.inkfood.com)

* View the [Official Website](http://www.inkfood.com)

![div](http://i.imgur.com/SNEFHAT.png)


