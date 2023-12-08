import React, { useEffect, useRef, useState } from 'react';

function Map() {
  const mapRef = useState(null);

  useEffect(() => {
    const mapDiv = mapRef.current;

    // 중심 좌표를 사용자의 현재 위치로 설정
    let centerLocation;
    let initialZoom = 19; // 초기 줌 레벨 설정

    // 사용자의 현재 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = new window.naver.maps.LatLng(latitude, longitude);

          // 사용자 위치에 마커 추가
          const marker = new window.naver.maps.Marker({
            position: userLocation,
            map: map,
          });

          // 지도를 사용자 위치로 이동
          centerLocation = userLocation; // 중심 좌표를 사용자 위치로 설정
          map.setCenter(centerLocation, initialZoom); // 중심 좌표와 줌 레벨을 설정
        },
        (error) => {
          console.error('오류 발생: ' + error.message);
          map.setCenter(centerLocation, initialZoom); // 오류 발생 시 기본 중심 좌표와 줌 레벨 설정
        }
      );
    }

    const map = new window.naver.maps.Map(mapDiv, {
      center: centerLocation,
      zoom: initialZoom,
    });
  }, []);

  return (
    <div>
      <div ref={mapRef} id="map" style={{ width: "40vw", height: "60vh" }} />
    </div>
  );
}

export default Map;
