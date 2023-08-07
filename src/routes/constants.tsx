import Home from "../modules";
import Assess from "../modules/assess/Assess";
import ForgotPassword from "../modules/auth/ForgotPassword";
import Login from "../modules/auth/Login";
import OTP from "../modules/auth/OTP";
import SIgnup from "../modules/auth/SIgnup";
import SignupForm from "../modules/auth/SignupForm";
import SignupPage from "../modules/auth/SignupPage";
import CreateCourse from "../modules/learn/CreateCourse";
import CreatingSection from "../modules/learn/CreatingSection";
import Learn from "../modules/learn/Learn";
import LearnOutlet from "../modules/learn/LearnOutlet";
import Preview from "../modules/learn/preview/Preview";
import SectionContent from "../modules/learn/SectionContent";
import SectionContentType from "../modules/learn/SectionContentType";
import CreateSubject from "../modules/plan/CreateSubject";
import TeachersGuideCreator from "../modules/plan/CreateTeachersGuide";
import LessonCreator from "../modules/plan/LessonCreator";
import Plan from "../modules/plan/Plan";
import PlanOutlet from "../modules/plan/PlanOutlet";
import SubjectCreator from "../modules/plan/SubjectCreator";
import Setting from "../modules/settings/Settings";
import Teach from "../modules/teach/Teach";
import { Route, RouteConstant } from "./@types";

const learnOutlet = {
  id: "learnOutlet",
  displayName: "Learn Outlet",
  path: "/learn",
  icon: "slideshare" as string,
  element: LearnOutlet,
  children: null,
};
const creatorCourse = {
  id: "courseCreatorPreview",
  displayName: "Course Creator",
  path: "/learn/create",
  icon: "creative commons" as string,
  element: CreateCourse,
  children: null,
};
const creatingSection = {
  id: "CreatingSection",
  displayName: "Creating",
  path: "/learn/create/section",
  icon: "creative commons" as string,
  element: CreatingSection,
  children: null,
};
const creatingSectionType = {
  id: "CreatingSectionType",
  displayName: "Section Type",
  path: "/learn/create/section/type",
  icon: "creative commons" as string,
  element: SectionContentType,
  children: null,
};
const creatingSectionContent = {
  id: "CreatingSectionSection",
  displayName: "Section Type",
  path: "/learn/create/section/type/:content_type",
  icon: "creative commons" as string,
  element: SectionContent,
  children: null,
};
const myCourses = {
  id: "myCourses",
  displayName: "My Course",
  path: "/learn/my_courses",
  icon: "creative commons" as string,
  element: "MyCourses",
  children: null,
};
const learning = {
  id: "learning",
  displayName: "Learning",
  path: "/learn/:programId",
  icon: "creative commons" as string,
  element: "Learning",
  children: null,
};
const coursePreview = {
  id: "coursePreview",
  displayName: "Course Preview",
  path: "/learn/:courseId/preview",
  icon: "creative commons" as string,
  element: Preview,
  children: null,
};
const settings = {
  id: "settings",
  displayName: "Settings",
  path: "/settings",
  icon: "creative commons" as string,
  element: Setting,
  children: null,
};
const planOutlet = {
  id: "planOutlet",
  displayName: "plan Outlet",
  path: "/plan",
  icon: "slideshare" as string,
  element: PlanOutlet,
  children: null,
};
const createSubject = {
  id: "createSubject",
  displayName: "Subject Creator",
  path: "/plan/subject/create",
  icon: "creative commons" as string,
  element: SubjectCreator,
  children: null,
};
const subjectCreate = {
  id: "subjectCreate",
  displayName: "Create Subject",
  path: "/plan/subject",
  icon: "creative commons" as string,
  element: CreateSubject,
  children: null,
};
const createLesson = {
  id: "createLesson",
  displayName: "Lesson Creator",
  path: "/plan/lesson/create",
  icon: "creative commons" as string,
  element: LessonCreator,
  children: null,
};
const createTeachersGuide = {
  id: "TeachersGuideLesson",
  displayName: "Teachers Guide Creator",
  path: "/plan/guide/create",
  icon: "creative commons" as string,
  element: TeachersGuideCreator,
  children: null,
};

const login = {
  id: "LOGIN",
  displayName: "Login",
  path: "/",
  icon: undefined,
  element: Login,
  children: null,
};
const signupPage = {
  id: "SIGNUP_PAGE",
  displayName: "Signup",
  path: "/signup",
  icon: undefined,
  element: SignupPage,
  children: null,
};
const signup = {
  id: "SIGNUP",
  displayName: "signup",
  path: "/signup",
  icon: undefined,
  element: SIgnup,
  children: null,
};
const O_T_P = {
  id: "OTP",
  displayName: "OTP",
  path: "/signup/otp",
  icon: undefined,
  element: OTP,
  children: null,
};
const signupForm = {
  id: "SIGNUP_FORM",
  displayName: "SIgnup Form",
  path: "/signup/form",
  icon: undefined,
  element: SignupForm,
  children: null,
};
const forgotPassword = {
  id: "FORGOT_PASSWORD",
  displayName: "Forgot Password",
  path: "/forgot_password",
  icon: undefined,
  element: ForgotPassword,
  children: null,
};
const home = {
  id: "DASHBOARD_PAGE",
  displayName: "Dashboard Page",
  path: "",
  icon: "braille",
  element: Home,
  children: null,
};
const teach = {
  id: "TEACH",
  displayName: "Teach",
  path: "/teach",
  icon: "spinner" as string,
  element: Teach,
  children: null,
};
const plan = {
  id: "PLAN",
  displayName: "Plan",
  path: "/plan",
  icon: "sitemap" as string,
  element: Plan,
  children: null,
};
const access = {
  id: "ACCESS",
  displayName: "Access",
  path: "/assess",
  icon: "paperclip" as string,
  element: Assess,
  children: null,
};
const learn = {
  id: "learn",
  displayName: "Learn",
  path: "/learn",
  icon: "book" as string,
  element: Learn,
  children: null,
};

const ROUTES_CONSTANTS: RouteConstant = {
  login,
  signupPage,
  signup,
  O_T_P,
  signupForm,
  forgotPassword,
  home,
  teach,
  plan,
  access,
  learn,
  learnOutlet,
  creatorCourse,
  creatingSection,
  creatingSectionType,
  creatingSectionContent,
  learning,
  coursePreview,
  settings,
  myCourses,
  planOutlet,
  createSubject,
  subjectCreate,
  createLesson,
  createTeachersGuide,
};

export const router: Route[] = [
  ROUTES_CONSTANTS.learn,
  ROUTES_CONSTANTS.plan,
  ROUTES_CONSTANTS.teach,
  ROUTES_CONSTANTS.access,
];

export default ROUTES_CONSTANTS;
