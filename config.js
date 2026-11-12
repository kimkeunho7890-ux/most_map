// ===== 공통 설정 (index.html, admin.html 이 함께 사용) =====
// Appwrite 콘솔에서 만든 값과 똑같이 맞춰주세요.
window.APP_CONFIG = {
    APPWRITE_ENDPOINT: 'https://appwrite.kim-gwajang.com/v1',
    APPWRITE_PROJECT:  'totalindex',      // 프로젝트 ID (새 프로젝트를 만들었다면 그 ID로 변경)
    BUCKET_ID:         'regional_sales',  // 상권실적 CSV를 올릴 Storage 버킷 ID

    // V-World 배경지도 인증키 (브이월드에 등록한 서비스 URL에서만 동작)
    VWORLD_KEY: 'EA7E3017-EC77-45B1-A994-84318229B02A'
};