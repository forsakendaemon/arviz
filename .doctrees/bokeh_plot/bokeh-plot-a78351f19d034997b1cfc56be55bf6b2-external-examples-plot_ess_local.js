(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("fa64c45c-9e75-4693-943a-24b715a6f513");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa64c45c-9e75-4693-943a-24b715a6f513' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"404d788b-0d85-4862-927a-1883dff3acf0":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18988","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18990","type":"BoxAnnotation"},{"attributes":{},"id":"18979","type":"BasicTicker"},{"attributes":{"children":[{"id":"19030"},{"id":"19028"}]},"id":"19031","type":"Column"},{"attributes":{},"id":"18966","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"19018"},"major_label_policy":{"id":"19019"},"ticker":{"id":"18975"}},"id":"18974","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"19021"},"selection_policy":{"id":"19022"}},"id":"19001","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"18990"}},"id":"18984","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"18978"},"dimension":1,"ticker":null},"id":"18981","type":"Grid"},{"attributes":{},"id":"18970","type":"LinearScale"},{"attributes":{"overlay":{"id":"18991"}},"id":"18986","type":"LassoSelectTool"},{"attributes":{},"id":"19015","type":"BasicTickFormatter"},{"attributes":{},"id":"18975","type":"BasicTicker"},{"attributes":{},"id":"19023","type":"Selection"},{"attributes":{},"id":"19016","type":"AllLabels"},{"attributes":{"axis":{"id":"18974"},"ticker":null},"id":"18977","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19002","type":"Circle"},{"attributes":{"data_source":{"id":"19001"},"glyph":{"id":"19002"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19003"},"view":{"id":"19005"}},"id":"19004","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19001"}},"id":"19005","type":"CDSView"},{"attributes":{},"id":"18972","type":"LinearScale"},{"attributes":{},"id":"18968","type":"DataRange1d"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"19010","type":"Span"},{"attributes":{"active_multi":null,"tools":[{"id":"18982"},{"id":"18983"},{"id":"18984"},{"id":"18985"},{"id":"18986"},{"id":"18987"},{"id":"18988"},{"id":"18989"}]},"id":"18992","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18991","type":"PolyAnnotation"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"19023"},"selection_policy":{"id":"19024"}},"id":"19007","type":"ColumnDataSource"},{"attributes":{},"id":"19018","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"19007"},"glyph":{"id":"19006"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"19009"}},"id":"19008","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"19012","type":"Title"},{"attributes":{"toolbars":[{"id":"18992"}],"tools":[{"id":"18982"},{"id":"18983"},{"id":"18984"},{"id":"18985"},{"id":"18986"},{"id":"18987"},{"id":"18988"},{"id":"18989"}]},"id":"19029","type":"ProxyToolbar"},{"attributes":{},"id":"18983","type":"PanTool"},{"attributes":{},"id":"19024","type":"UnionRenderers"},{"attributes":{},"id":"19022","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"19015"},"major_label_policy":{"id":"19016"},"ticker":{"id":"18979"}},"id":"18978","type":"LinearAxis"},{"attributes":{"below":[{"id":"18974"}],"center":[{"id":"18977"},{"id":"18981"}],"height":500,"left":[{"id":"18978"}],"output_backend":"webgl","renderers":[{"id":"19004"},{"id":"19008"},{"id":"19010"},{"id":"19011"}],"title":{"id":"19012"},"toolbar":{"id":"18992"},"toolbar_location":null,"width":500,"x_range":{"id":"18966"},"x_scale":{"id":"18970"},"y_range":{"id":"18968"},"y_scale":{"id":"18972"}},"id":"18965","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"19029"},"toolbar_location":"above"},"id":"19030","type":"ToolbarBox"},{"attributes":{},"id":"18985","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"18989","type":"HoverTool"},{"attributes":{},"id":"18982","type":"ResetTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"19006","type":"Scatter"},{"attributes":{},"id":"18987","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19003","type":"Circle"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"19011","type":"Span"},{"attributes":{},"id":"19021","type":"Selection"},{"attributes":{},"id":"19019","type":"AllLabels"},{"attributes":{"source":{"id":"19007"}},"id":"19009","type":"CDSView"},{"attributes":{"children":[[{"id":"18965"},0,0]]},"id":"19028","type":"GridBox"}],"root_ids":["19031"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"404d788b-0d85-4862-927a-1883dff3acf0","root_ids":["19031"],"roots":{"19031":"fa64c45c-9e75-4693-943a-24b715a6f513"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();