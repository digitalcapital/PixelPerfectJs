var getScript = require('./getscript')
class DCPixelPerfect {
  constructor(options) {
    this.opts = {
      'zIndex': -1,
      'opacity': 0.5,
      'loadjQuery': true,
      'jQuerySrc': 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
      'imagesPath': 'img',
      'pages': {}
    }

    this.toolbarTemplate =`
      <div class="dc-pixel-perfect-toolbar">
          <select class="dc-pixel-perfect-toolbar__select dc-pixel-perfect-toolbar__page-select">
            {pages}
          </select>
          <button class="dc-pixel-perfect-toolbar__button dc-pixel-perfect-toolbar__toggle-button">Toggle Layer(H)</button>
      </div>`,

    Object.assign(this.opts, options)
    this.checkjQuery()
  }
  checkjQuery() {
    if (window.jQuery === undefined && this.opts.loadjQuery) {
      var _this = this
      getScript(this.opts.jQuerySrc)
        .then(function () {
          _this.init()
        })
    } else {
      this.init()
    }
  }
  init() {
    var $body = $('body')
    this.layer = $('<div class="dc-pixel-perfect"></div>')
      .hide()
      .css({
        'position': 'absolute',
        'top': 0, 'bottom': 0,
        'left': 0, 'right': 0,
        'z-index': this.opts.zIndex,
        'opacity': this.opts.opacity
      })
      .prependTo($body)

    this.setPage()
    this.createToolbar()
    this.registerEventListeners()
  }
  registerEventListeners() {
    $(window).on('resize', $.proxy(this.resize, this))
    $('.dc-pixel-perfect-toolbar__button').on('click', $.proxy(this.toggleLayer, this))
    $('.dc-pixel-perfect-toolbar__page-select').on('change', $.proxy(this.changePage, this))
    $(document).on('keydown', $.proxy(this.toggleLayer, this))
  }
  changePage(event) {
    var selected = $(event.currentTarget).find(":selected").text()
    this.setPage(selected)
  }
  setPage(page) {
    var body = $('body')
    this.page = this.opts.pages[page] ? this.opts.pages[page] : null
    if (this.page == null) {
      for (var bodyClass in this.opts.pages) {
        if (body.hasClass(bodyClass)) {
          this.page = this.opts.pages[bodyClass]
        }
      }
    }
    if (this.page) {
      this.setPageBackground()
    }
  }
  resize() {
    this.setPageBackground()
  }
  setPageBackground() {
    if (!this.page) return
    var windowWitdh = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    for (var widthCondition in this.page) {
      var img = this.opts.imagesPath + '/' + this.page[widthCondition]
      if (eval(windowWitdh + widthCondition)) {
        this.layer
          .css('background', 'url(' + img + ')')
          .css('background-repeat', 'no-repeat')
          .css('background-position', 'center top')
      }
    }
  }
  parse(template, params) {
    for (var p in params) {
       template = template.replace(new RegExp('{' + p + '}', 'g'), params[p])
    }
    return template
  }
  createToolbar() {
    var pages = Object.getOwnPropertyNames(this.opts.pages)
    var data = { 'pages': '' }
    for(var i = 0; i < pages.length; i++) {
      data.pages += '<option>' + pages[i] + '</option>'
    }
    $('body').append( this.parse(this.toolbarTemplate, data) )
  }
  toggleLayer(event) {
    if ( (event.type === 'keydown' && event.which === 72) || event.type === 'click' ) {
      this.layer.toggle()
    }
  }
}

window.DCPixelPerfect = DCPixelPerfect
module.exports = DCPixelPerfect
