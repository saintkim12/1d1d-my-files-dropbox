

# my-files-dropbox
- 드롭박스 api 사용해보기

# 참고
- https://www.dropbox.com/developers/documentation/javascript#install
- https://www.dropbox.com/developers/apps?_tk=pilot_lp&_ad=topbar4&_camp=myapps


# 작업순서
1. [문서](https://www.dropbox.com/developers/documentation/javascript#install) 참고
2. ``npm install dropbox``
3. [App Console](https://www.dropbox.com/developers/apps?_tk=pilot_lp&_ad=topbar4&_camp=myapps)에서 앱 세팅하기
    1. 일단 app에 관련된 파일만 관리하도록 처리
    2. 앱 생성
    3. scope 처리하기
    4. Public Access Token 생성하기
4. 생성한 토큰을 연결하고 테스트 코드 사용해보기
5. 파일을 web에서 업로드하고 목록 확인하는 테스트 코드가 작동하는지 확인하기

# 테스트 코드 실행
``node index.js``