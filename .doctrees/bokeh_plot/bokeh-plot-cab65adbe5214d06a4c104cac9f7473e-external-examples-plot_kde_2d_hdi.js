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
    
      
      
    
      var element = document.getElementById("530d2947-342d-4466-a7a9-32665ba0c435");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '530d2947-342d-4466-a7a9-32665ba0c435' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ad89e1f2-fc49-4f25-9db6-2b6e865a0857":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21637","type":"Selection"},{"attributes":{},"id":"21640","type":"UnionRenderers"},{"attributes":{},"id":"21584","type":"BasicTicker"},{"attributes":{},"id":"21630","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[306]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[306]}},"selected":{"id":"21637"},"selection_policy":{"id":"21638"}},"id":"21615","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"21629"},"major_label_policy":{"id":"21630"},"ticker":{"id":"21588"}},"id":"21587","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21622","type":"Patch"},{"attributes":{"end":6.823385714349284,"start":-3.4453422679465886},"id":"21625","type":"Range1d"},{"attributes":{"source":{"id":"21620"}},"id":"21624","type":"CDSView"},{"attributes":{},"id":"21597","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21600","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21599","type":"BoxAnnotation"},{"attributes":{},"id":"21629","type":"BasicTickFormatter"},{"attributes":{},"id":"21588","type":"BasicTicker"},{"attributes":{},"id":"21636","type":"UnionRenderers"},{"attributes":{},"id":"21628","type":"Title"},{"attributes":{},"id":"21632","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"21591"},{"id":"21592"},{"id":"21593"},{"id":"21594"},{"id":"21595"},{"id":"21596"},{"id":"21597"},{"id":"21598"}]},"id":"21601","type":"Toolbar"},{"attributes":{"data_source":{"id":"21610"},"glyph":{"id":"21611"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21612"},"view":{"id":"21614"}},"id":"21613","type":"GlyphRenderer"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21611","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"dzorQpwG8T+W7X/kAa7wP4yyhAWmhPA/BeSW54R18D8UZ6NqlYnwP/6ZLUIgwPA/Vh2LlbEO8T9w8t8xVVLxP35Y0yXeg/E/ekIA3eQZ8j+85+L8hJ3yP3Tt4YC3qfI/+JRieU9M8z8M3eXHtOjzP+p/PDPrAvQ/5vqUazrJ9D9Y0uiS5DP1PzHvmO9RmvU/LuwW7dp89j+kx+tdFH/2P9mwhbRfifc/9LzuKETK9z/IUnjDRdn4P0Cy8fNzFfk/kKf0vqNg+j+tmF2KSW/6P9yc94nTq/s/dHmmm4co/D8okvpUA/f8PwLzPSWJ/f0/eIf9HzNC/j/EfADrYo3/P/c1Ue+rUABACrkBW0lsAECwM4NA4REBQFauBCZ5twFAbusw4qkQAkD+KIYLEV0CQKSjB/GoAgNATB6J1kCoA0DymAq82E0EQJgTjKFw8wRAQI4NhwiZBUAdOn/XEbcFQOYIj2ygPgZAjoMQUjjkBkBDxbPLSGQHQDT+kTfQiQdAdnBEZRa6B0BpPTa1zvUHQNp4Ex1oLwhArLub0N8vCEAbBvxzK1IIQCrWCp7UUwhAMHOVZapDCEDaeBMdaC8IQC1aJNmTJghAkO73lYL/B0B1xiE1Q80HQCBi3Pp5kgdANP6RN9CJB0CDN1+l6VcHQJmQxrObGAdAjoMQUjjkBkCQTVTcqsIGQKss+zRnVAZA5giPbKA+BkAuieqxLtYFQECODYcImQVAM6U8rDlTBUCYE4yhcPMEQI4Y2J1yzwRA8pgKvNhNBEBWaP8zWz0EQEweidZAqANAuuCWnKSNA0CkowfxqAIDQI+5nOH+vgJA/iiGCxFdAkBjlduUr90BQFauBCZ5twFAsDODQOERAUDfcYkaaccAQAq5AVtJbABAxHwA62KN/z94h/0fM0L+P2LfZWaMvP0/KJL6VAP3/D/cnPeJ06v7P5Cn9L6jYPo/QLLx83MV+T/0vO4oRMr3P6TH610Uf/Y/TskcNays9T9Y0uiS5DP1Pwzd5ce06PM/tcUnSeSK8z+85+L8hJ3yP6KtiFHJLPI/9lLNUr+H8T9w8t8xVVLxP3c6K0KcBvE/","dtype":"float64","order":"little","shape":[102]},"y":{"__ndarray__":"Mr65YNtW9z/4eeuQr2/4P7w1HcGDiPk/gPFO8Veh+j9ErYAhLLr7PwhpslEA0/w/ziTkgdTr/T8uMibBJpT+P5DgFbKoBP8/LM4jcb4OAEB31ZocQY4AQA6sPIkomwBA8IlVoZInAUCvIyfDLZ8BQNJnbrn8swFAtEWH0WZAAkDRHi6sa4gCQJYjoOnQzAJAeQG5ATtZA0AZz+RBdloDQFrf0Rml5QNAIPQSltMCBEA8veoxD3IEQCujmktIiARATyyPCK75BEAgmwNKef4EQORLtBKoYwVAAnkcYuOKBUBqkddjd8wFQORWNXpNFwZACQ2EEv8qBkDsFrVLcHUGQMY0TpK3owZAfCFwNYetBkAA7m05Bt0GQBwZMjbxEQdAqBJnqiEwB0DjF6P6T0kHQLiCGdBydAdA7tE+1OmGB0CvhWStEXgHQOmesGseWgdAFUTUEYw5B0CoEmeqITAHQAPSGQsoAgdAxjROkrejBkDkVjV6TRcGQOiki0v93gVAAnkcYuOKBUAgmwNKef4EQNOQQE9CcwRAPL3qMQ9yBEBa39EZpeUDQHgBuQE7WQNAliOg6dDMAkA/SLtx1GsCQLRFh9FmQAJA0mduufyzAUDwiVWhkicBQA6sPIkomwBAya1orMKGAEAsziNxvg4AQJDgFbKoBP8/zJHRB31X/j/OJOSB1Ov9PwhpslEA0/w/jPiNlLGf/D9ErYAhLLr7P3IVwz4vMvs/gPFO8Veh+j/vton6stH5P7w1HcGDiPk/3lmDDweP+D/4eeuQr2/4P3QQhu9zgPc/Mr65YNtW9z9iWVTSE5j2P24CiDAHPvY/JN6dngvB9T+qRlYAMyX1Py+C8CfP9/Q/FMDFNyxM9D/miiTQXgz0P7/rjAlHwPM/+84Y8QhZ8z8QhaBHZQ3zPyDP8p+K8/I/ryzCu0LK8j9N5iwRGYHyP5qRF8CMQ/I/ske1vNos8j9QwtT0uUbyP4wAFWnYl/I/IM/yn4rz8j8qGe3cvjLzP7KkdzFa2fM/5ook0F4M9D+yCEtHKa/0P6pGVgAzJfU/bgKIMAc+9j/sQ69vgqz2PzK+uWDbVvc/","dtype":"float64","order":"little","shape":[102]}},"selected":{"id":"21639"},"selection_policy":{"id":"21640"}},"id":"21620","type":"ColumnDataSource"},{"attributes":{},"id":"21592","type":"PanTool"},{"attributes":{"toolbar":{"id":"21645"},"toolbar_location":"above"},"id":"21646","type":"ToolbarBox"},{"attributes":{},"id":"21591","type":"ResetTool"},{"attributes":{},"id":"21639","type":"Selection"},{"attributes":{"overlay":{"id":"21599"}},"id":"21593","type":"BoxZoomTool"},{"attributes":{"source":{"id":"21610"}},"id":"21614","type":"CDSView"},{"attributes":{"axis":{"id":"21587"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21590","type":"Grid"},{"attributes":{"data_source":{"id":"21615"},"glyph":{"id":"21616"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21617"},"view":{"id":"21619"}},"id":"21618","type":"GlyphRenderer"},{"attributes":{},"id":"21594","type":"WheelZoomTool"},{"attributes":{"end":6.600835320710798,"start":-2.1065048328658635},"id":"21626","type":"Range1d"},{"attributes":{},"id":"21635","type":"Selection"},{"attributes":{"axis":{"id":"21583"},"grid_line_color":null,"ticker":null},"id":"21586","type":"Grid"},{"attributes":{"overlay":{"id":"21600"}},"id":"21595","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"21646"},{"id":"21644"}]},"id":"21647","type":"Column"},{"attributes":{"source":{"id":"21615"}},"id":"21619","type":"CDSView"},{"attributes":{},"id":"21596","type":"UndoTool"},{"attributes":{"formatter":{"id":"21632"},"major_label_policy":{"id":"21633"},"ticker":{"id":"21584"}},"id":"21583","type":"LinearAxis"},{"attributes":{},"id":"21638","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21612","type":"Patch"},{"attributes":{"children":[[{"id":"21574"},0,0]]},"id":"21644","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[510]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[510]}},"selected":{"id":"21635"},"selection_policy":{"id":"21636"}},"id":"21610","type":"ColumnDataSource"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21621","type":"Patch"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21616","type":"Patch"},{"attributes":{"toolbars":[{"id":"21601"}],"tools":[{"id":"21591"},{"id":"21592"},{"id":"21593"},{"id":"21594"},{"id":"21595"},{"id":"21596"},{"id":"21597"},{"id":"21598"}]},"id":"21645","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"21583"}],"center":[{"id":"21586"},{"id":"21590"}],"height":500,"left":[{"id":"21587"}],"output_backend":"webgl","renderers":[{"id":"21613"},{"id":"21618"},{"id":"21623"}],"title":{"id":"21628"},"toolbar":{"id":"21601"},"toolbar_location":null,"width":500,"x_range":{"id":"21625"},"x_scale":{"id":"21579"},"y_range":{"id":"21626"},"y_scale":{"id":"21581"}},"id":"21574","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"21620"},"glyph":{"id":"21621"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21622"},"view":{"id":"21624"}},"id":"21623","type":"GlyphRenderer"},{"attributes":{},"id":"21581","type":"LinearScale"},{"attributes":{},"id":"21579","type":"LinearScale"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21617","type":"Patch"},{"attributes":{"callback":null},"id":"21598","type":"HoverTool"},{"attributes":{},"id":"21633","type":"AllLabels"}],"root_ids":["21647"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"ad89e1f2-fc49-4f25-9db6-2b6e865a0857","root_ids":["21647"],"roots":{"21647":"530d2947-342d-4466-a7a9-32665ba0c435"}}];
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