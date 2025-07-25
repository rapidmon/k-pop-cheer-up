# K-pop 응원 가사 앱

힘이 되는 K-pop 가사를 랜덤으로 보여주는 React TypeScript 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🎵 K-pop 응원 가사 랜덤 표시
- 🎬 YouTube 링크 연동
- ❤️ 즐겨찾기 기능
- 📱 반응형 디자인
- 🎨 아름다운 그라데이션 UI
- ⚡ 로딩 애니메이션
- 🔍 검색 기능 (확장 가능)

## 📁 폴더 구조

```
src/
├── components/           # 재사용 가능한 컴포넌트들
│   ├── SongCard.tsx     # 노래 정보 카드 컴포넌트
│   ├── LoadingSpinner.tsx # 로딩 애니메이션 컴포넌트
│   ├── Header.tsx       # 헤더 컴포넌트
│   └── ErrorMessage.tsx # 에러 메시지 컴포넌트
├── hooks/               # 커스텀 훅들
│   └── useKpopLyrics.ts # K-pop 가사 관련 로직 훅
├── services/            # API 서비스들
│   └── musixmatchApi.ts # Musixmatch API 서비스
├── types/               # TypeScript 타입 정의들
│   └── index.ts         # 공통 타입들
├── utils/               # 유틸리티 함수들
│   └── index.ts         # 헬퍼 함수들
├── data/                # 샘플 데이터
│   └── sampleSongs.ts   # 예시 K-pop 노래 데이터
├── App.tsx              # 메인 앱 컴포넌트
├── index.tsx            # 앱 엔트리 포인트
└── index.css            # 글로벌 스타일 및 애니메이션
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 복사해서 `.env` 파일을 만들고 API 키를 입력하세요:

```bash
cp .env.example .env
```

### 3. 개발 서버 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 🔧 설정 및 사용법

### Musixmatch API 설정

1. [Musixmatch Developer](https://developer.musixmatch.com/)에서 계정 생성
2. API 키 발급
3. `.env` 파일에 API 키 추가:
   ```
   REACT_APP_MUSIXMATCH_API_KEY=your_api_key_here
   ```

### 주요 컴포넌트 사용법

#### SongCard 컴포넌트
```tsx
import SongCard from './components/SongCard';

<SongCard 
  song={songData}
  isFavorite={false}
  onToggleFavorite={(id) => console.log('Toggle:', id)}
/>
```

#### useKpopLyrics 훅
```tsx
import { useKpopLyrics } from './hooks/useKpopLyrics';

const MyComponent = () => {
  const { currentSong, isLoading, getRandomSong } = useKpopLyrics();
  // ... 사용
};
```

## ⚠️ 중요 주의사항

### 저작권 관련
- 현재 코드는 예시 데이터를 사용합니다
- **실제 K-pop 가사는 저작권 보호를 받습니다**
- 상업적 사용 시 반드시 저작권 허가 필요

### CORS 문제
- Musixmatch API는 브라우저에서 직접 호출 시 CORS 에러 발생 가능
- 프로덕션 환경에서는 백엔드 프록시 서버 구축 권장

### 해결 방안
1. **백엔드 프록시 구축**: Express.js나 Next.js API routes 사용
2. **저작권 해결**: 
   - 아티스트/레이블과 라이선스 협의
   - 사용자 직접 입력 방식 도입
   - 공개 도메인 가사만 사용

## 🔨 빌드 및 배포

### 프로덕션 빌드
```bash
npm run build
```

### 정적 파일 서빙
```bash
# 빌드 후 serve로 확인
npx serve -s build
```

### 배포 옵션
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod --dir=build`
- **GitHub Pages**: `npm run deploy`

## 🧪 테스트

```bash
# 유닛 테스트 실행
npm test

# 커버리지와 함께 테스트
npm test -- --coverage
```

## 📈 성능 최적화

- 컴포넌트 지연 로딩 (React.lazy)
- 이미지 최적화
- 번들 크기 분석: `npm run build -- --analyze`

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **스타일링**: Tailwind CSS
- **아이콘**: Lucide React
- **API**: Musixmatch API
- **빌드**: Create React App

## 📝 개발 가이드

### 코드 스타일
```bash
# ESLint 검사
npm run lint

# Prettier 포매팅
npm run format
```

### 컴포넌트 작성 규칙
1. TypeScript 인터페이스 먼저 정의
2. Props에 기본값 설정
3. 접근성(a11y) 고려
4. 에러 처리 포함

### 훅 작성 규칙
1. 단일 책임 원칙 준수
2. 메모이제이션 적절히 사용
3. 클린업 함수 작성

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🙋‍♂️ 문의사항

프로젝트에 대한 문의사항이나 버그 리포트는 [Issues](https://github.com/yourusername/kpop-lyrics-app/issues)에 등록해주세요.

---

Made with 💜 for K-pop lovers

## 📱 스크린샷

[여기에 앱 스크린샷을 추가하세요]

## 🚧 향후 계획

- [ ] 다국어 지원 (한국어/English)
- [ ] 다크 모드 지원
- [ ] 소셜 공유 기능
- [ ] 플레이리스트 기능
- [ ] PWA (Progressive Web App) 지원
- [ ] 오프라인 모드
- [ ] 검색 기능 고도화