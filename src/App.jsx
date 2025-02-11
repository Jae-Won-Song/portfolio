import { useState, useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
  });
  const [open, setOpen] = useState(null);
  const [text, setText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const letters =
    "안녕하세요, 효율적인 개발을 지향하는 프론트엔드 개발자 송재원 입니다.";
  const speed = 150;

  const toggleAccordion = (index, event) => {
    event.preventDefault();
    setOpen(open === index ? null : index);
  };

  const typingEffect = () => {
    if (typingIndex < letters.length) {
      setText((prevText) => prevText + letters[typingIndex]);
      setTypingIndex(typingIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(typingEffect, speed);
    if (typingIndex === letters.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typingIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* 헤더 */}
      <header className="flex flex-col items-center py-12 bg-blue-600 text-white px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text">{text}</span>
          <span
            className={`cursor ${cursorVisible ? "visible" : "invisible"}`}
            style={{ borderRight: "3px solid #fff", marginLeft: "0.3rem" }}
          ></span>
        </h1>
        <div className="text-xl md:text-2xl text-center">
          <div className="text-left">React와</div>
          <div>TypeScript를 중점으로 개발을 진행 중입니다.</div>
        </div>
      </header>

      {/* 기술 스택 */}
      <section className="max-w-6xl mx-auto flex justify-between items-center gap-10 mt-12 px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col gap-3 text-xl text-right">
          <div className="font-bold text-2xl">Do It Well!</div>
          <div className="flex items-center gap-2">
            <img
              src="../public/React-icon.png"
              alt="React Icon"
              width={30}
              height={30}
            />
            React
          </div>
          <div className="flex items-center gap-2">
            <img
              src="../public/TypeScript.png"
              alt="TypeScript Icon"
              width={30}
              height={30}
            />
            TypeScript
          </div>
          <div className="flex items-center gap-2">
            <img
              src="../public/tailwind-css.svg"
              alt="Tailwind Icon"
              width={30}
              height={30}
            />
            Tailwind
          </div>
          <div className="flex items-center gap-2">
            <img
              src="../public/git_icon.svg"
              alt="Git Icon"
              width={30}
              height={30}
            />
            Git
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xl">
          <img
            src="/mySelfie.jpeg"
            alt="mySelfie"
            className="w-[200px] h-[200px] object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col gap-3 text-xl text-right">
          <div className="font-bold text-2xl">Do It!</div>
          <div className="flex items-center gap-2">
            <img
              src="../public/next-image.png"
              alt="Next Icon"
              width={30}
              height={30}
            />
            Next.js
          </div>
          <div className="flex items-center gap-2">
            <img
              src="../public/redux.svg"
              alt="Redux Icon"
              width={30}
              height={30}
            />
            Redux
          </div>
          <div className="flex items-center gap-2">
            <img
              src="../public/scss.svg"
              alt="Scss Icon"
              width={30}
              height={30}
            />
            SCSS
          </div>
          <div className="flex items-center gap-2">
            <img
              src="../public/jira.svg"
              alt="Jira Icon"
              width={30}
              height={30}
            />
            Jira
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="flex justify-center text-3xl font-bold mb-8">
            진행 프로젝트
          </h2>

          <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
            {/* AI-KARB 프로젝트 */}
            <div className="w-full md:w-[500px]">
              <div
                className="font-semibold text-2xl cursor-pointer hover:text-blue-500 transition-colors"
                onClick={(event) => toggleAccordion(1, event)}
              >
                AI-KARB
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === 1 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } mt-4 space-y-4 text-gray-800`}
              >
                {open === 1 && (
                  <>
                    <div>
                      <div className="font-semibold text-lg">Why?</div>
                      <p className="leading-relaxed">
                        현재 한국자율광고심의기구에서 광고심의를 사람이 손수
                        하고 있어 인력, 시간낭비가 심함
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">How?</div>
                      <p className="leading-relaxed">
                        AI가 광고심의를 대신해주고 더 나아가 심의에 걸리는
                        내용까지 알려준다면?
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">What?</div>
                      <p className="leading-relaxed">
                        학습된 AI모델을 AI-KARB에 활용해 광고심의는 물론 심의에
                        걸리는 문장을 알려주고 관리자는 직원들의 작업을
                        분배하며, 직원들은 작업 목표를 쉽게 파악 가능.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">사용 기술</div>
                      <p className="leading-relaxed">
                        Vite + React, TypeScript, SCSS, NivoChart, husky,
                        RestApi
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">프로젝트 기여</div>
                      <ul className="list-disc pl-5 leading-relaxed">
                        <li>재사용 가능한 테이블 컴포넌트 개발</li>
                        <li>
                          로그인된 아이디에 따라 작업자/관리자 대시보드 상태
                          관리
                        </li>
                        <li>대시보드에서 시각화 자료 제공</li>
                        <li>자동 작업 배분 시스템 개발</li>
                        <li>lazy, suspense 적용으로 로딩 속도 최대 50% 개선</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">트러블 슈팅</div>
                      <p className="leading-relaxed">
                        무한스크롤 구현 중 무한 로딩 문제 발생 → API 요청 방식이
                        잘못되었음을 인지 후, 백엔드 팀과 협업하여 `currentId`
                        값을 활용하는 방식으로 변경.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">얻어간 지식</div>
                      <p className="leading-relaxed">
                        문제 해결 능력 + 팀과의 적극적인 소통의 중요성을
                        깨달았다. 스스로 해결하는 것도 좋지만, 적절한 타이밍에
                        질문하고 협업하는 것이 더 좋을 때도 있다.
                      </p>
                    </div>
                    <div>
                      <div className=" flex font-semibold text-lg">
                        프로젝트 이미지
                      </div>
                      <div className="swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            lazy 적용 전 홈화면
                            <img
                              src="../public/적용전홈.png"
                              alt="lazy 적용 전 홈 img"
                            />
                          </div>
                          <div className="swiper-slide">
                            lazy 적용 후 홈화면
                            <img
                              src="../public/적용후홈.png"
                              alt="lazy 적용 후 홈 img"
                            />
                          </div>
                          <div className="swiper-slide">
                            lazy 적용 전 대시보드 화면
                            <img
                              src="../public/적용전대시보드.png"
                              alt="lazy 적용 전 대시보드 img"
                            />
                          </div>
                          <div className="swiper-slide">
                            lazy 적용 후 대시보드
                            <img
                              src="../public/적용후대시보드.png"
                              alt=" img"
                            />
                          </div>
                          <div className="swiper-slide">
                            관리자 대시보드
                            <img
                              src="../public/dashboard-admin.png"
                              alt="admin dashboard img"
                            />
                          </div>
                          <div className="swiper-slide">
                            유저 대시보드
                            <img
                              src="../public/dashboard-home.png"
                              alt="user dashboard img"
                            />
                          </div>
                          <div className="swiper-slide">
                            작업자 배분
                            <img
                              src="../public/divideWork.png"
                              alt="devide work img"
                            />
                          </div>
                          <div className="swiper-slide">
                            지적광고 목록
                            <img src="../public/issue.png" alt="issue img" />
                          </div>
                          <div className="swiper-slide">
                            지적광고 검수
                            <img
                              src="../public/issueRe.png"
                              alt="issue Re img"
                            />
                          </div>
                          <div className="swiper-slide">
                            회원 정보 관리
                            <img
                              src="../public/manageUser.png"
                              alt="user manage img"
                            />
                          </div>
                          <div className="swiper-slide">
                            내 작업 관리
                            <img src="../public/mytask.png" alt="mytask img" />
                          </div>
                          <div className="swiper-slide">
                            가입 요청 관리
                            <img
                              src="../public/signureq.png"
                              alt="signup img"
                            />
                          </div>
                          <div className="swiper-slide">
                            유저플로우
                            <img
                              src="../public/userflow.png"
                              alt="userflow img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 패스트캠퍼스 인트라넷 */}
            <div className="w-full md:w-[500px]">
              <div
                className="font-semibold text-2xl cursor-pointer hover:text-blue-500 transition-colors"
                onClick={(event) => toggleAccordion(2, event)}
              >
                패스트캠퍼스 인트라넷
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === 2 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } mt-4 space-y-4 text-gray-800`}
              >
                {open === 2 && (
                  <>
                    <div>
                      <div className="font-semibold text-lg">Why?</div>
                      <p className="leading-relaxed">
                        교육을 진행하며 잦은 QR입실 오류 및 HRD서버 자체 문제로
                        제시간에 도착했음에도 불구하고 출석을 하지 못해
                        출결관리에 애를 쓴 수강생들이 많았다.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">How?</div>
                      <p className="leading-relaxed">
                        수강생들에게 가장 불편했던 출결관리. 더 나아가 휴가,
                        조퇴관리 및 수업 관련 공지사항 등 학업에만 매진할 수
                        있도록 도와주자.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">What?</div>
                      <p className="leading-relaxed">
                        출결관리, 휴가관리, 오늘 할 일, 공지사항을 한 번에 사용,
                        확인할 수 있는 웹 개발.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">사용 기술</div>
                      <p className="leading-relaxed">
                        React + TypeScript, Redux, SCSS
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">프로젝트 기여</div>
                      <ul className="list-disc pl-5 leading-relaxed">
                        <li>
                          휴가 관리 페이지에서 사용되는 카드 컴포넌트 및
                          드롭다운 개발
                        </li>
                        <li>휴가 신청폼, 신청 리스트 개발</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">트러블 슈팅</div>
                      <p className="leading-relaxed">
                        Firebase DB 연결 중, DB 초기화 문제로 데이터 읽기/쓰기가
                        되지 않음 → 원인: Config 설정을 중복 선언하여 DB 연결
                        충돌 발생 → 해결: Firebase 설정 파일을 중앙에서
                        관리하고, 개별 컴포넌트에서 중복 선언하지 않도록 수정.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">얻어간 지식</div>
                      <p className="leading-relaxed">
                        Config 파일은 프로젝트 전반에 영향을 미치기 때문에 설정
                        파일을 명확하게 관리하여 중복 선언을 방지하는 것이
                        중요하다.
                      </p>
                    </div>
                  </>
                )}
                <div className="flex flex-col justify-center items-center w-[100%]">
                  <div
                    className="flex justify-center items-center w-12 h-6 bg-slate-700 text-white rounded-md"
                    onClick={() =>
                      (window.location.href =
                        "https://master--fastcampus-intrenet.netlify.app/")
                    }
                  >
                    Demo
                  </div>
                  <div className="flex flex-col">
                    <div>데모 아이디 : dev@email.com</div>
                    <div>데모 비밀번호 : 123456</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
