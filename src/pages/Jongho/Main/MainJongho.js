import React from 'react';
import './MainJongho.scss';

function Main() {
  return (
    <div class="Main">
      <header>
        <nav>
          <div id="symbolBlock">
            <img
              class="instaImg"
              src="/images/Jongho/Main/instagram-logo.png"
              alt="instagram logo"
            />
            <span class="instagramLogo">Instagram</span>
          </div>
          <div id="searchBlock">
            <img
              class="magnifier"
              src="/images/Jongho/Main/magnifier.png"
              alt="돋보기"
            />
            <input class="searchInput" type="text" placeholder="검색" />
          </div>
          <div id="otherContents">
            <img
              class="explore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="Explore Button"
            />
            <img
              id="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="Heart symbol"
            />
            <img
              class="user"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="Person symbol"
            />
          </div>
        </nav>
      </header>
      <main>
        <section>
          <article class="feedContainer">
            <div class="profileBlock">
              <div class="profileAccount">
                <img
                  class="profileImage"
                  src="https://user-images.githubusercontent.com/93215875/145150249-bc2e2a6e-bdd0-4c02-9005-1b748cc1a428.jpg"
                  alt="profile"
                />
                <span class="accId">Wecode-Jongho</span>
              </div>
              <i class="fas fa-ellipsis-h"></i>
            </div>
            <img
              class="myFeedImage"
              src="https://user-images.githubusercontent.com/93215875/144997737-23918ede-3150-428b-a491-b8f816d7652b.jpg"
              alt="Mandalorian"
            />
            <div class="toolBox">
              <div class="toolBoxThree">
                <i class="far fa-heart toolBoxElement"></i>
                <i class="far fa-comment toolBoxElement" id="speechBubble"></i>
                <i
                  class="fas fa-external-link-alt toolBoxElement"
                  id="share"
                ></i>
              </div>
              <i class="far fa-bookmark toolBoxElement"></i>
            </div>
            <div class="likeMessageBlock">
              <img
                class="profileImageLikeMessage"
                src="https://user-images.githubusercontent.com/93215875/145150249-bc2e2a6e-bdd0-4c02-9005-1b748cc1a428.jpg"
                alt="profile"
              />
              <span>10명이 좋아합니다</span>
            </div>
            <div class="commentContainer">
              <div class="commentsAndButton">
                <ul class="commentList">
                  <li class="comments">
                    <span class="commentId accId">Jongho Yoon</span>
                    <span class="commentSentence contText">
                      위코드 프로젝트
                    </span>
                  </li>
                  <li class="comments">
                    <span class="commentId accId">Jongho Yoon</span>
                    <span class="commentSentence contText">
                      위코드 프로젝트
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="postComment">
              <input
                class="inputComment"
                type="text"
                placeholder="댓글 달기..."
              />
              <button class="pushComment-Btn">게시</button>
            </div>
          </article>
        </section>
        <section>
          <div class="myAccount">
            <img
              class="accountRecomm"
              src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
              alt="wecode mark"
            />
            <div class="recommName">
              <p class="accId">account name1</p>
              <p class="subAccId">account name2</p>
            </div>
          </div>
          <article class="recommStory">
            <div class="storyHead">
              <span>스토리</span>
              <button class="seeAllBtn">모두 보기</button>
            </div>
            <ul>
              <li class="storyList">
                <img
                  class="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div class="accountBlock">
                  <span class="accId">ID</span>
                  <span class="subAccId">before Time</span>
                </div>
              </li>
              <li class="storyList">
                <img
                  class="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div class="accountBlock">
                  <span class="accId">ID</span>
                  <span class="subAccId">before Time</span>
                </div>
              </li>
              <li class="storyList">
                <img
                  class="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div class="accountBlock">
                  <span class="accId">ID</span>
                  <span class="subAccId">before Time</span>
                </div>
              </li>
              <li class="storyList">
                <img
                  class="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div class="accountBlock">
                  <span class="accId">ID</span>
                  <span class="subAccId">before Time</span>
                </div>
              </li>
            </ul>
          </article>
          <article class="recommWraper">
            <div class="recommHeader">
              <span>회원님을 위한 추천</span>
              <button class="seeAllBtn">모두 보기</button>
            </div>
            <ul>
              <li class="recommList">
                <div class="recommCont">
                  <img
                    class="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div class="accountBlock">
                    <span class="accId">ID</span>
                    <span class="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button class="followBtn" type="button">
                    팔로우
                  </button>
                </div>
              </li>
              <li class="recommList">
                <div class="recommCont">
                  <img
                    class="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div class="accountBlock">
                    <span class="accId">ID</span>
                    <span class="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button class="followBtn" type="button">
                    팔로우
                  </button>
                </div>
              </li>
              <li class="recommList">
                <div class="recommCont">
                  <img
                    class="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div class="accountBlock">
                    <span class="accId">ID</span>
                    <span class="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button class="followBtn" type="button">
                    팔로우
                  </button>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Main;
