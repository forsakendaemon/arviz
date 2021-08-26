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
    
      
      
    
      var element = document.getElementById("55d646ff-81e6-4363-b47c-6c600e9e8858");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '55d646ff-81e6-4363-b47c-6c600e9e8858' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e7634779-7a72-4303-b83a-53f806c4cc43":{"defs":[],"roots":{"references":[{"attributes":{},"id":"44660","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44635","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"44639","type":"Span"},{"attributes":{},"id":"44661","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44677"},"selection_policy":{"id":"44678"}},"id":"44634","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44614","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44549","type":"BoxAnnotation"},{"attributes":{},"id":"44529","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44550","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"44686"},{"id":"44684"}]},"id":"44687","type":"Column"},{"attributes":{},"id":"44677","type":"Selection"},{"attributes":{"below":[{"id":"44533"}],"center":[{"id":"44536"},{"id":"44540"},{"id":"44599"},{"id":"44605"},{"id":"44611"},{"id":"44617"}],"height":331,"left":[{"id":"44537"}],"output_backend":"webgl","renderers":[{"id":"44597"},{"id":"44603"},{"id":"44609"},{"id":"44615"}],"title":{"id":"44620"},"toolbar":{"id":"44551"},"toolbar_location":null,"width":496,"x_range":{"id":"44525"},"x_scale":{"id":"44529"},"y_range":{"id":"44527"},"y_scale":{"id":"44531"}},"id":"44524","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"44678","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44673"},"selection_policy":{"id":"44674"}},"id":"44622","type":"ColumnDataSource"},{"attributes":{},"id":"44662","type":"Selection"},{"attributes":{},"id":"44663","type":"UnionRenderers"},{"attributes":{},"id":"44651","type":"BasicTickFormatter"},{"attributes":{},"id":"44652","type":"AllLabels"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44656"},"selection_policy":{"id":"44657"}},"id":"44594","type":"ColumnDataSource"},{"attributes":{},"id":"44679","type":"Selection"},{"attributes":{"children":[[{"id":"44524"},0,0],[{"id":"44560"},0,1]]},"id":"44684","type":"GridBox"},{"attributes":{},"id":"44653","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44602","type":"VBar"},{"attributes":{},"id":"44654","type":"AllLabels"},{"attributes":{},"id":"44680","type":"UnionRenderers"},{"attributes":{},"id":"44563","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44596","type":"VBar"},{"attributes":{},"id":"44527","type":"DataRange1d"},{"attributes":{"source":{"id":"44594"}},"id":"44598","type":"CDSView"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"44617","type":"Span"},{"attributes":{"data_source":{"id":"44594"},"glyph":{"id":"44595"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44596"},"view":{"id":"44598"}},"id":"44597","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"44620","type":"Title"},{"attributes":{},"id":"44668","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"44600"}},"id":"44604","type":"CDSView"},{"attributes":{},"id":"44546","type":"UndoTool"},{"attributes":{},"id":"44669","type":"AllLabels"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"44627","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44601","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"44618","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44658"},"selection_policy":{"id":"44659"}},"id":"44600","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"44605","type":"Span"},{"attributes":{"axis":{"id":"44567"},"ticker":null},"id":"44570","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44607","type":"VBar"},{"attributes":{},"id":"44547","type":"SaveTool"},{"attributes":{},"id":"44670","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44613","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"44653"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"44654"},"ticker":{"id":"44534"}},"id":"44533","type":"LinearAxis"},{"attributes":{},"id":"44671","type":"AllLabels"},{"attributes":{"data_source":{"id":"44600"},"glyph":{"id":"44601"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44602"},"view":{"id":"44604"}},"id":"44603","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"44582","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"44611","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"44668"},"major_label_policy":{"id":"44669"},"ticker":{"id":"44646"}},"id":"44571","type":"LinearAxis"},{"attributes":{},"id":"44531","type":"LinearScale"},{"attributes":{"source":{"id":"44606"}},"id":"44610","type":"CDSView"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"44670"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"44671"},"ticker":{"id":"44568"}},"id":"44567","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44660"},"selection_policy":{"id":"44661"}},"id":"44606","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"44646","type":"FixedTicker"},{"attributes":{},"id":"44568","type":"BasicTicker"},{"attributes":{"data_source":{"id":"44612"},"glyph":{"id":"44613"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44614"},"view":{"id":"44616"}},"id":"44615","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44608","type":"VBar"},{"attributes":{"source":{"id":"44640"}},"id":"44644","type":"CDSView"},{"attributes":{"below":[{"id":"44567"}],"center":[{"id":"44570"},{"id":"44574"},{"id":"44627"},{"id":"44633"},{"id":"44639"},{"id":"44645"}],"height":331,"left":[{"id":"44571"}],"output_backend":"webgl","renderers":[{"id":"44625"},{"id":"44631"},{"id":"44637"},{"id":"44643"}],"title":{"id":"44648"},"toolbar":{"id":"44585"},"toolbar_location":null,"width":496,"x_range":{"id":"44525"},"x_scale":{"id":"44563"},"y_range":{"id":"44527"},"y_scale":{"id":"44565"}},"id":"44560","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"44606"},"glyph":{"id":"44607"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44608"},"view":{"id":"44610"}},"id":"44609","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"44571"},"dimension":1,"ticker":null},"id":"44574","type":"Grid"},{"attributes":{},"id":"44656","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44641","type":"VBar"},{"attributes":{"text":"mu"},"id":"44648","type":"Title"},{"attributes":{"data_source":{"id":"44634"},"glyph":{"id":"44635"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44636"},"view":{"id":"44638"}},"id":"44637","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44595","type":"VBar"},{"attributes":{},"id":"44541","type":"ResetTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44662"},"selection_policy":{"id":"44663"}},"id":"44612","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"44583"}},"id":"44577","type":"BoxZoomTool"},{"attributes":{"source":{"id":"44634"}},"id":"44638","type":"CDSView"},{"attributes":{},"id":"44576","type":"PanTool"},{"attributes":{},"id":"44657","type":"UnionRenderers"},{"attributes":{},"id":"44575","type":"ResetTool"},{"attributes":{"overlay":{"id":"44550"}},"id":"44545","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44642","type":"VBar"},{"attributes":{},"id":"44581","type":"SaveTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"44651"},"major_label_policy":{"id":"44652"},"ticker":{"id":"44618"}},"id":"44537","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"44645","type":"Span"},{"attributes":{},"id":"44578","type":"WheelZoomTool"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"44599","type":"Span"},{"attributes":{"overlay":{"id":"44584"}},"id":"44579","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"44548","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44679"},"selection_policy":{"id":"44680"}},"id":"44640","type":"ColumnDataSource"},{"attributes":{},"id":"44580","type":"UndoTool"},{"attributes":{},"id":"44673","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"44575"},{"id":"44576"},{"id":"44577"},{"id":"44578"},{"id":"44579"},{"id":"44580"},{"id":"44581"},{"id":"44582"}]},"id":"44585","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"44633","type":"Span"},{"attributes":{"data_source":{"id":"44640"},"glyph":{"id":"44641"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44642"},"view":{"id":"44644"}},"id":"44643","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"44622"},"glyph":{"id":"44623"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44624"},"view":{"id":"44626"}},"id":"44625","type":"GlyphRenderer"},{"attributes":{},"id":"44565","type":"LinearScale"},{"attributes":{},"id":"44674","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"44541"},{"id":"44542"},{"id":"44543"},{"id":"44544"},{"id":"44545"},{"id":"44546"},{"id":"44547"},{"id":"44548"}]},"id":"44551","type":"Toolbar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44629","type":"VBar"},{"attributes":{"overlay":{"id":"44549"}},"id":"44543","type":"BoxZoomTool"},{"attributes":{"source":{"id":"44628"}},"id":"44632","type":"CDSView"},{"attributes":{"toolbars":[{"id":"44551"},{"id":"44585"}],"tools":[{"id":"44541"},{"id":"44542"},{"id":"44543"},{"id":"44544"},{"id":"44545"},{"id":"44546"},{"id":"44547"},{"id":"44548"},{"id":"44575"},{"id":"44576"},{"id":"44577"},{"id":"44578"},{"id":"44579"},{"id":"44580"},{"id":"44581"},{"id":"44582"}]},"id":"44685","type":"ProxyToolbar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44675"},"selection_policy":{"id":"44676"}},"id":"44628","type":"ColumnDataSource"},{"attributes":{},"id":"44544","type":"WheelZoomTool"},{"attributes":{},"id":"44658","type":"Selection"},{"attributes":{"toolbar":{"id":"44685"},"toolbar_location":"above"},"id":"44686","type":"ToolbarBox"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44636","type":"VBar"},{"attributes":{},"id":"44542","type":"PanTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44630","type":"VBar"},{"attributes":{},"id":"44659","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44624","type":"VBar"},{"attributes":{"source":{"id":"44612"}},"id":"44616","type":"CDSView"},{"attributes":{"source":{"id":"44622"}},"id":"44626","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44583","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"44537"},"dimension":1,"ticker":null},"id":"44540","type":"Grid"},{"attributes":{"data_source":{"id":"44628"},"glyph":{"id":"44629"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44630"},"view":{"id":"44632"}},"id":"44631","type":"GlyphRenderer"},{"attributes":{},"id":"44675","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44623","type":"VBar"},{"attributes":{"axis":{"id":"44533"},"ticker":null},"id":"44536","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44584","type":"PolyAnnotation"},{"attributes":{},"id":"44676","type":"UnionRenderers"},{"attributes":{},"id":"44525","type":"DataRange1d"},{"attributes":{},"id":"44534","type":"BasicTicker"}],"root_ids":["44687"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"e7634779-7a72-4303-b83a-53f806c4cc43","root_ids":["44687"],"roots":{"44687":"55d646ff-81e6-4363-b47c-6c600e9e8858"}}];
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