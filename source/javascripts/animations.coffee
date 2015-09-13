$ ->
  # disable animations on mobile
  return if window.matchMedia("only screen and (max-width: 768px)").matches

  $('.link-container').css('opacity',0)
  $('.link-title').css('opacity',0)

  $('#links').one('inview', (e, i, x, y) ->
    animate('.link-container', "slideDownIn", 0)
  )

  $('.link-square').mouseenter( ->
    $(this).siblings('.link-title').delay(100)
      .velocity('transition.slideUpIn', {duration: 100})
  )

  $('.link-square').mouseleave( ->
    $(this).siblings('.link-title').delay(100)
      .velocity('transition.slideDownOut', {duration: 100})
  )

animate = (element, transition, delayms) ->
  $(element).delay(delayms)
    .velocity("transition."+transition,
      {duration: 400, stagger: 75, display: 'inline-block'})