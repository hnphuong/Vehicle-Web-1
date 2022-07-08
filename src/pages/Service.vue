<template>
  <div>
    <!------ Breadcrumbs Start ------>
    <div class="impl_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1>service</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active">service</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!------ About our company Start ------>
    <div class="impl_provide_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="impl_heading">
                        <h1>what we provide</h1>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="impl_facility_wrapper">
                                <img src="http://via.placeholder.com/312x218" alt="" class="img-fluid" />
                                <div class="impl_ser_hover_ovrly">
                                    <div class="impl_ser_text">
                                        <img src="images/svg/key.svg" alt="key" />
                                        <h3>purchase</h3>
                                    </div>
                                    <div class="impl_ser_text_ovrly">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="impl_facility_wrapper">
                                <img src="http://via.placeholder.com/312x218" alt="" class="img-fluid" />
                                <div class="impl_ser_hover_ovrly">
                                    <div class="impl_ser_text">
                                        <img src="images/svg/doller.svg" alt="key" />
                                        <h3>sell</h3>
                                    </div>
                                    <div class="impl_ser_text_ovrly">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="impl_facility_wrapper">
                                <img src="http://via.placeholder.com/312x218" alt="" class="img-fluid" />
                                <div class="impl_ser_hover_ovrly">
                                    <div class="impl_ser_text">
                                        <img src="images/svg/insurance_car.svg" alt="key" />
                                        <h3>insurance</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="impl_facility_wrapper">
                                <img src="http://via.placeholder.com/312x218" alt="" class="img-fluid" />
                                <div class="impl_ser_hover_ovrly">
                                    <div class="impl_ser_text">
                                        <img src="images/svg/trust.svg" alt="key" />
                                        <h3>trusted agent</h3>
                                    </div>
                                    <div class="impl_ser_text_ovrly">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="impl_service_video">
                        <div class="impl_video_inner">
                            <div class="impl_servdo_video">
                                <span class="impl_play_icon"><a class="impl-popup-youtube" href="https://www.youtube.com/watch?v=BqjuObIH1nY"><i class="fa fa-play" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!------ Testimonial Section Start ------>
    <div class="impl_query_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="impl_heading">
                        <h1>Ask An Expert</h1>
                    </div>
                    <div class="impl_query_form">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="input-group">
                                    <input type="text" class="form-control require" name="name" placeholder="Enter Your Name">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="input-group">
                                    <input type="text" class="form-control require" name="name" placeholder="Enter Your Email">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="background-color: #ffffff;">
                                <div class="input-group">
                                    <!-- <textarea class="form-control" placeholder="Enter Your Query"></textarea> -->
                                    <!-- <RichTextEditorPlugin ref="rteInstance" :toolbarSettings="toolbarSettings" :fontFamily="fontFamily" :format="format" :inlineMode="inlineMode"><p>The sample is configured with the inline mode of the editor. Initially, the editor is rendered without a <a href="https://ej2.syncfusion.com/home/" target='_blank'>toolbar</a>. The toolbar becomes visible only when the content is selected.</p></RichTextEditorPlugin> -->
                                    <TextEditor></TextEditor>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input type="hidden" name="form_type" value="contact">
                                <a @click="stringToHTML()" class="impl_btn submitForm">send</a>
                                <div class="response text-center text-capitalize"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TextEditor from '@/pages/Components/Text-editor.vue'
export default {
  data () {
    return {
      content: '<h1>Some initial content</h1>',
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline',
          'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList',
          'CreateLink']
      },
      format: {
        width: 'auto'
      },
      fontFamily: {
        width: 'auto'
      },
      inlineMode: { enable: true, onSelection: true }
    }
  },

  mounted () {
    setTimeout(() => {
      this.$store.commit('loading/SET_LOADING', {
        loading: false
      })
    }, 1000)
  },

  methods: {
    stringToHTML (str) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(this.content, 'text/html');
      console.log(doc.div)
    },
    htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    },
    htmlEntities(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
  },
  
  components: {
    TextEditor
  }
}
</script>

<style scoped>
    .e-code-mirror::before {
        content: '\e345';
    }

    .e-html-preview::before {
        content: '\e350';
    }

    .CodeMirror-linenumber,
    .CodeMirror-gutters {
        display: none;
    }
    .sb-header {
        z-index: 100;
    }

    .sb-content.e-view.hide-header {
        top: 0 !important;
    }

    .sb-header.e-view.hide-header {
        display: none;
    }

    .fabric-dark .cm-s-default .cm-tag,
    .bootstrap5-dark .cm-s-default .cm-tag,
    .material-dark .cm-s-default .cm-tag,
    .tailwind-dark .cm-s-default .cm-tag,
    .highcontrast .cm-s-default .cm-tag {
        color: #00ff00;
    }

    .fabric-dark .cm-s-default .cm-string,
    .bootstrap5-dark .cm-s-default .cm-string,
    .material-dark .cm-s-default .cm-string,
    .tailwind-dark .cm-s-default .cm-string {
        color: blue;
    }

    .highcontrast .cm-s-default .cm-string {
        color: #ffd939;
    }

    .fabric-dark .cm-s-default .cm-attribute,
    .bootstrap5-dark .cm-s-default .cm-attribute,
    .material-dark .cm-s-default .cm-attribute,
    .tailwind-dark .cm-s-default .cm-attribute,
    .highcontrast .cm-s-default .cm-attribute {
        color: #f00;
    }
    
    .fabric-dark .CodeMirror,
    .bootstrap5-dark .CodeMirror,
    .material-dark .CodeMirror,
    .tailwind-dark .CodeMirror {
        background:  #303030;
        color: white;
    }

    .highcontrast .CodeMirror {
        background: black;
        color: white;
    }

    .e-richtexteditor .e-rte-content .e-content pre {
        padding: 10px;
        background: #F4F5F7;
    }

    .fabric-dark .e-richtexteditor .e-rte-content .e-content pre,
    .bootstrap5-dark .e-richtexteditor .e-rte-content .e-content pre,
    .material-dark .e-richtexteditor .e-rte-content .e-content pre,
    .tailwind-dark .e-richtexteditor .e-rte-content .e-content pre,
    .highcontrast .e-richtexteditor .e-rte-content .e-content pre {
        padding: 10px;
        background: #303030;
    }
</style>
