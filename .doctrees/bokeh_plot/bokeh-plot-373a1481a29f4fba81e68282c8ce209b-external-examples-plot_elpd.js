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
    
      
      
    
      var element = document.getElementById("cf12f89a-6d40-4778-a5dc-106c4eb57c70");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cf12f89a-6d40-4778-a5dc-106c4eb57c70' but no matching script tag was found.")
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
                    
                  var docs_json = '{"649a7cf1-5e43-446b-9cfb-17f650a75cbf":{"defs":[],"roots":{"references":[{"attributes":{"below":[{"id":"18528"}],"center":[{"id":"18531"},{"id":"18535"}],"height":288,"left":[{"id":"18532"}],"output_backend":"webgl","renderers":[{"id":"18557"}],"title":{"id":"18559"},"toolbar":{"id":"18546"},"toolbar_location":null,"width":432,"x_range":{"id":"18520"},"x_scale":{"id":"18524"},"y_range":{"id":"18522"},"y_scale":{"id":"18526"}},"id":"18519","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18541","type":"UndoTool"},{"attributes":{"children":[{"id":"18575"},{"id":"18573"}]},"id":"18576","type":"Column"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"18562"},"major_label_policy":{"id":"18563"},"ticker":{"id":"18533"}},"id":"18532","type":"LinearAxis"},{"attributes":{"formatter":{"id":"18565"},"major_label_policy":{"id":"18566"},"ticker":{"id":"18529"}},"id":"18528","type":"LinearAxis"},{"attributes":{},"id":"18522","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18556"},"glyph":{"id":"18555"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18558"}},"id":"18557","type":"GlyphRenderer"},{"attributes":{},"id":"18542","type":"SaveTool"},{"attributes":{"overlay":{"id":"18544"}},"id":"18538","type":"BoxZoomTool"},{"attributes":{},"id":"18536","type":"ResetTool"},{"attributes":{},"id":"18565","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"18556"}},"id":"18558","type":"CDSView"},{"attributes":{},"id":"18569","type":"UnionRenderers"},{"attributes":{},"id":"18566","type":"AllLabels"},{"attributes":{"toolbar":{"id":"18574"},"toolbar_location":"above"},"id":"18575","type":"ToolbarBox"},{"attributes":{"active_multi":null,"tools":[{"id":"18536"},{"id":"18537"},{"id":"18538"},{"id":"18539"},{"id":"18540"},{"id":"18541"},{"id":"18542"},{"id":"18543"}]},"id":"18546","type":"Toolbar"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"18559","type":"Title"},{"attributes":{},"id":"18537","type":"PanTool"},{"attributes":{},"id":"18520","type":"DataRange1d"},{"attributes":{"callback":null},"id":"18543","type":"HoverTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"18555","type":"Scatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18545","type":"PolyAnnotation"},{"attributes":{},"id":"18568","type":"Selection"},{"attributes":{},"id":"18563","type":"AllLabels"},{"attributes":{},"id":"18529","type":"BasicTicker"},{"attributes":{"children":[[{"id":"18519"},0,0]]},"id":"18573","type":"GridBox"},{"attributes":{},"id":"18526","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"18546"}],"tools":[{"id":"18536"},{"id":"18537"},{"id":"18538"},{"id":"18539"},{"id":"18540"},{"id":"18541"},{"id":"18542"},{"id":"18543"}]},"id":"18574","type":"ProxyToolbar"},{"attributes":{},"id":"18539","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"18532"},"dimension":1,"ticker":null},"id":"18535","type":"Grid"},{"attributes":{"overlay":{"id":"18545"}},"id":"18540","type":"LassoSelectTool"},{"attributes":{},"id":"18524","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18544","type":"BoxAnnotation"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"18568"},"selection_policy":{"id":"18569"}},"id":"18556","type":"ColumnDataSource"},{"attributes":{},"id":"18562","type":"BasicTickFormatter"},{"attributes":{},"id":"18533","type":"BasicTicker"},{"attributes":{"axis":{"id":"18528"},"ticker":null},"id":"18531","type":"Grid"}],"root_ids":["18576"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"649a7cf1-5e43-446b-9cfb-17f650a75cbf","root_ids":["18576"],"roots":{"18576":"cf12f89a-6d40-4778-a5dc-106c4eb57c70"}}];
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