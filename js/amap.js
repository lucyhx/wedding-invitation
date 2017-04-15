/**
 * Created by WindomZ on 17-4-15.
 */
!function () {
  var infoWindow, map, level = 15,
    center = {lng: 116.481488, lat: 39.990464},
    features = [{
      type: 'Marker',
      name: '方恒国际中心',
      desc: '真诚的邀请您参加我们的婚礼',
      color: 'red',
      icon: 'cir',
      offset: {x: -9, y: -31},
      lnglat: {lng: 116.481488, lat: 39.990464}
    }]

  function loadFeatures () {
    for (var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++) {
      data = features[i]
      switch (data.type) {
        case 'Marker':
          feature = new AMap.Marker({
            map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
            zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
            content: '<div class="icon icon-' + data.icon + ' icon-' + data.icon + '-' + data.color + '"></div>'
          })
          break
        case 'Polyline':
          for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat))
          }
          feature = new AMap.Polyline({
            map: map, path: path, extData: data, zIndex: 2,
            strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity
          })
          break
        case 'Polygon':
          for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat))
          }
          feature = new AMap.Polygon({
            map: map, path: path, extData: data, zIndex: 1,
            strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
            fillColor: data.fillColor, fillOpacity: data.fillOpacity
          })
          break
        default:
          feature = null
      }
      if (feature) {
        AMap.event.addListener(feature, 'click', mapFeatureClick)
      }
    }
  }

  function mapFeatureClick (e) {
    if (!infoWindow) { infoWindow = new AMap.InfoWindow({autoMove: true}) }
    var extData = e.target.getExtData()
    infoWindow.setContent('<h5>' + extData.name + '</h5><div>' + extData.desc + '</div>')
    infoWindow.open(map, e.lnglat)
  }

  map = new AMap.Map('mapContainer', {
    center: new AMap.LngLat(center.lng, center.lat),
    level: level,
    keyboardEnable: false,
    dragEnable: false,
    scrollWheel: false,
    doubleClickZoom: false
  })
  new AMap.TileLayer.Traffic({map: map, zIndex: 2})
  loadFeatures()

  map.on('complete', function () {
    map.plugin(['AMap.ToolBar', 'AMap.OverView', 'AMap.Scale'], function () {
      map.addControl(new AMap.ToolBar({ruler: false, direction: false, locate: false}))
      map.addControl(new AMap.OverView)
      map.addControl(new AMap.Scale)
    })
  })

  map.plugin('AMap.AdvancedInfoWindow', function () {
    var infowindow = new AMap.AdvancedInfoWindow({
      panel: 'panel',
      placeSearch: true,
      asOrigin: true,
      asDestination: true,
      content: '<div class="infowindow-content">' +
      '<div class="amap-info-header">方恒国际中心</div>' +
      '<div class="amap-info-body">阜通东大街6号</div></div>'
    })
    infowindow.open(map, [116.481488, 39.990464])
  })

}()
