$ ->
  $('#links > a').css('opacity',0)
  $('.project').css('opacity',0)
  $('.position').css('opacity',0)

  animatePositions('.position')

  $('#projects').one('inview', (e, i, x, y) ->
    animateProjects(e, i, x, y, '.project')
  )

  $('#links').one('inview', (e, i, x, y) ->
    animateLinks(e, i, x, y, '#links > a')
  )

animatePositions = (element) ->
  $(element).delay(250).velocity("transition.slideDownIn", {duration: 400, stagger: 50})

animateProjects = (e, i, x, y, element) ->
  $(element).velocity("transition.slideDownIn", {duration: 400, stagger: 50, display:'inline-block'})

animateLinks = (e, i, x, y, element) ->
  $(element).velocity("transition.slideDownIn", {duration: 400, stagger: 50, display:'inline-block'})