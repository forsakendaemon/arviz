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
    
      
      
    
      var element = document.getElementById("9f701449-2f1e-40f0-bde4-36b5791907b9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9f701449-2f1e-40f0-bde4-36b5791907b9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6329e115-0179-4575-baa2-98ba3272a33d":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18386","type":"PanTool"},{"attributes":{"axis":{"id":"18377"},"ticker":null},"id":"18380","type":"Grid"},{"attributes":{"overlay":{"id":"18393"}},"id":"18387","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"18394"}},"id":"18389","type":"LassoSelectTool"},{"attributes":{},"id":"18371","type":"DataRange1d"},{"attributes":{"source":{"id":"18414"}},"id":"18418","type":"CDSView"},{"attributes":{"data_source":{"id":"18419"},"glyph":{"id":"18420"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18421"},"view":{"id":"18423"}},"id":"18422","type":"GlyphRenderer"},{"attributes":{},"id":"18433","type":"UnionRenderers"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"18405","type":"Line"},{"attributes":{},"id":"18390","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18385"},{"id":"18386"},{"id":"18387"},{"id":"18388"},{"id":"18389"},{"id":"18390"},{"id":"18391"},{"id":"18392"}]},"id":"18395","type":"Toolbar"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"18410","type":"Line"},{"attributes":{"axis":{"id":"18381"},"dimension":1,"ticker":null},"id":"18384","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"18411","type":"Line"},{"attributes":{},"id":"18375","type":"LinearScale"},{"attributes":{"data":{"x":[-1.6769067699569056,1.9077674566106693],"y":[0,0]},"selected":{"id":"18432"},"selection_policy":{"id":"18433"}},"id":"18404","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"18377"}],"center":[{"id":"18380"},{"id":"18384"}],"height":360,"left":[{"id":"18381"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"18407"},{"id":"18412"},{"id":"18417"},{"id":"18422"}],"title":{"id":"18425"},"toolbar":{"id":"18395"},"toolbar_location":null,"width":720,"x_range":{"id":"18369"},"x_scale":{"id":"18373"},"y_range":{"id":"18371"},"y_scale":{"id":"18375"}},"id":"18368","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18425","type":"Title"},{"attributes":{},"id":"18373","type":"LinearScale"},{"attributes":{"source":{"id":"18404"}},"id":"18408","type":"CDSView"},{"attributes":{},"id":"18369","type":"DataRange1d"},{"attributes":{"formatter":{"id":"18429"},"major_label_policy":{"id":"18430"},"ticker":{"id":"18378"}},"id":"18377","type":"LinearAxis"},{"attributes":{"data":{"x":[-0.6318497530671987,0.6457062855570161],"y":[0,0]},"selected":{"id":"18434"},"selection_policy":{"id":"18435"}},"id":"18409","type":"ColumnDataSource"},{"attributes":{},"id":"18430","type":"AllLabels"},{"attributes":{},"id":"18438","type":"Selection"},{"attributes":{"toolbars":[{"id":"18395"}],"tools":[{"id":"18385"},{"id":"18386"},{"id":"18387"},{"id":"18388"},{"id":"18389"},{"id":"18390"},{"id":"18391"},{"id":"18392"}]},"id":"18444","type":"ProxyToolbar"},{"attributes":{"source":{"id":"18419"}},"id":"18423","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":0.0050097736356091785},"y":{"value":0}},"id":"18416","type":"Circle"},{"attributes":{},"id":"18385","type":"ResetTool"},{"attributes":{"toolbar":{"id":"18444"},"toolbar_location":"above"},"id":"18445","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"18404"},"glyph":{"id":"18405"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18406"},"view":{"id":"18408"}},"id":"18407","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18393","type":"BoxAnnotation"},{"attributes":{},"id":"18378","type":"BasicTicker"},{"attributes":{},"id":"18429","type":"BasicTickFormatter"},{"attributes":{},"id":"18435","type":"UnionRenderers"},{"attributes":{},"id":"18388","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":0.0050097736356091785},"y":{"value":0}},"id":"18415","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.15944712330964744},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"18421","type":"Circle"},{"attributes":{"source":{"id":"18409"}},"id":"18413","type":"CDSView"},{"attributes":{"formatter":{"id":"18426"},"major_label_policy":{"id":"18427"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"18382"}},"id":"18381","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"18406","type":"Line"},{"attributes":{"callback":null},"id":"18392","type":"HoverTool"},{"attributes":{},"id":"18437","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18436"},"selection_policy":{"id":"18437"}},"id":"18414","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18394","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.15944712330964744},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"18420","type":"Circle"},{"attributes":{},"id":"18391","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"/rA3BUBcAsBQh0JdvYr6v1CHQl29ivq/nzGTyRtY87+fMZPJG1jzv58xk8kbWPO/nzGTyRtY879IEESOfOnqv0gQRI586eq/SBBEjnzp6r9IEESOfOnqv0gQRI586eq/4sYStvn23r/ixhK2+fbev+LGErb59t6/4sYStvn23r/ixhK2+fbev+LGErb59t6/4sYStvn23r9g+DUxnHXBv2D4NTGcdcG/YPg1MZx1wb9g+DUxnHXBv2D4NTGcdcG/YPg1MZx1wb9g+DUxnHXBvxiNftQSJss/GI1+1BImyz8YjX7UEibLPxiNftQSJss/GI1+1BImyz8YjX7UEibLPxiNftQSJss/yshw1EpW4j/KyHDUSlbiP8rIcNRKVuI/yshw1EpW4j/KyHDUSlbiP8rIcNRKVuI/GGZhAdpZ7T8YZmEB2lntPxhmYQHaWe0/GGZhAdpZ7T8YZmEB2lntP50WkcWwZ/U/nRaRxbBn9T+dFpHFsGf1P/RPoufEmvs/9E+i58Sa+z+ZQhuWkNsCQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"DjIHasNoxD8OMgdqw2jEPxXLCh8lnd4/DjIHasNoxD8VywofJZ3eP5L+iET0guk/zEvG/Krb8T8OMgdqw2jEPxXLCh8lnd4/kv6IRPSC6T/MS8b8qtvxP1AYSNfb9fY/DjIHasNoxD8VywofJZ3eP5L+iET0guk/zEvG/Krb8T9QGEjX2/X2P9TkybEMEPw/q9glxh6VAEAOMgdqw2jEPxXLCh8lnd4/kv6IRPSC6T/MS8b8qtvxP1AYSNfb9fY/1OTJsQwQ/D+r2CXGHpUAQA4yB2rDaMQ/FcsKHyWd3j+S/ohE9ILpP8xLxvyq2/E/UBhI19v19j/U5MmxDBD8P6vYJcYelQBADjIHasNoxD8VywofJZ3eP5L+iET0guk/zEvG/Krb8T9QGEjX2/X2P9TkybEMEPw/DjIHasNoxD8VywofJZ3eP5L+iET0guk/zEvG/Krb8T9QGEjX2/X2Pw4yB2rDaMQ/FcsKHyWd3j+S/ohE9ILpPw4yB2rDaMQ/FcsKHyWd3j8OMgdqw2jEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"18438"},"selection_policy":{"id":"18439"}},"id":"18419","type":"ColumnDataSource"},{"attributes":{},"id":"18427","type":"AllLabels"},{"attributes":{"children":[{"id":"18445"},{"id":"18443"}]},"id":"18446","type":"Column"},{"attributes":{},"id":"18439","type":"UnionRenderers"},{"attributes":{},"id":"18426","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"18409"},"glyph":{"id":"18410"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18411"},"view":{"id":"18413"}},"id":"18412","type":"GlyphRenderer"},{"attributes":{},"id":"18382","type":"BasicTicker"},{"attributes":{"children":[[{"id":"18368"},0,0]]},"id":"18443","type":"GridBox"},{"attributes":{"data_source":{"id":"18414"},"glyph":{"id":"18415"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18416"},"view":{"id":"18418"}},"id":"18417","type":"GlyphRenderer"},{"attributes":{},"id":"18432","type":"Selection"},{"attributes":{},"id":"18434","type":"Selection"},{"attributes":{},"id":"18436","type":"Selection"}],"root_ids":["18446"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"6329e115-0179-4575-baa2-98ba3272a33d","root_ids":["18446"],"roots":{"18446":"9f701449-2f1e-40f0-bde4-36b5791907b9"}}];
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