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
    
      
      
    
      var element = document.getElementById("c8910cd1-1bd2-4373-9438-35f76565b708");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c8910cd1-1bd2-4373-9438-35f76565b708' but no matching script tag was found.")
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
                    
                  var docs_json = '{"07b0213f-bd19-4f42-bd4d-f86ec82e6b7d":{"defs":[],"roots":{"references":[{"attributes":{},"id":"15290","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"15293"},{"id":"15294"},{"id":"15295"},{"id":"15296"},{"id":"15297"},{"id":"15298"},{"id":"15299"},{"id":"15300"}]},"id":"15303","type":"Toolbar"},{"attributes":{"toolbar":{"id":"15331"},"toolbar_location":"above"},"id":"15332","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"15302"}},"id":"15297","type":"LassoSelectTool"},{"attributes":{},"id":"15298","type":"UndoTool"},{"attributes":{},"id":"15294","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15302","type":"PolyAnnotation"},{"attributes":{"source":{"id":"15313"}},"id":"15315","type":"CDSView"},{"attributes":{},"id":"15286","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"15312","type":"Scatter"},{"attributes":{"text":"centered model - non centered model"},"id":"15316","type":"Title"},{"attributes":{},"id":"15319","type":"BasicTickFormatter"},{"attributes":{},"id":"15281","type":"LinearScale"},{"attributes":{"children":[[{"id":"15276"},0,0]]},"id":"15330","type":"GridBox"},{"attributes":{},"id":"15296","type":"WheelZoomTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"15325"},"selection_policy":{"id":"15326"}},"id":"15313","type":"ColumnDataSource"},{"attributes":{},"id":"15323","type":"AllLabels"},{"attributes":{"below":[{"id":"15285"}],"center":[{"id":"15288"},{"id":"15292"}],"height":288,"left":[{"id":"15289"}],"output_backend":"webgl","renderers":[{"id":"15314"}],"title":{"id":"15316"},"toolbar":{"id":"15303"},"toolbar_location":null,"width":432,"x_range":{"id":"15277"},"x_scale":{"id":"15281"},"y_range":{"id":"15279"},"y_scale":{"id":"15283"}},"id":"15276","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"15313"},"glyph":{"id":"15312"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"15315"}},"id":"15314","type":"GlyphRenderer"},{"attributes":{},"id":"15326","type":"UnionRenderers"},{"attributes":{"children":[{"id":"15332"},{"id":"15330"}]},"id":"15333","type":"Column"},{"attributes":{},"id":"15299","type":"SaveTool"},{"attributes":{"axis":{"id":"15285"},"ticker":null},"id":"15288","type":"Grid"},{"attributes":{"overlay":{"id":"15301"}},"id":"15295","type":"BoxZoomTool"},{"attributes":{},"id":"15283","type":"LinearScale"},{"attributes":{},"id":"15322","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"15322"},"major_label_policy":{"id":"15323"},"ticker":{"id":"15286"}},"id":"15285","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15300","type":"HoverTool"},{"attributes":{},"id":"15325","type":"Selection"},{"attributes":{},"id":"15279","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"15319"},"major_label_policy":{"id":"15320"},"ticker":{"id":"15290"}},"id":"15289","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"15303"}],"tools":[{"id":"15293"},{"id":"15294"},{"id":"15295"},{"id":"15296"},{"id":"15297"},{"id":"15298"},{"id":"15299"},{"id":"15300"}]},"id":"15331","type":"ProxyToolbar"},{"attributes":{},"id":"15293","type":"ResetTool"},{"attributes":{"axis":{"id":"15289"},"dimension":1,"ticker":null},"id":"15292","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15301","type":"BoxAnnotation"},{"attributes":{},"id":"15320","type":"AllLabels"},{"attributes":{},"id":"15277","type":"DataRange1d"}],"root_ids":["15333"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"07b0213f-bd19-4f42-bd4d-f86ec82e6b7d","root_ids":["15333"],"roots":{"15333":"c8910cd1-1bd2-4373-9438-35f76565b708"}}];
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