import NaviList from "./NaviList/NaviList";
import GoogleLogout from "../Logout/page";
import Icon from "./Icon/Icon";

const SideMenu = () => {
  return (
    // p-4 を p-3 にして全体の余白を詰め、pt-2（または pt-0）で上部に押し上げます
    <aside className="w-full bg-[#1e293b] text-white p-3 pt-2 flex flex-col justify-between md:w-64 md:h-screen md:sticky md:top-0 md:p-6 md:pt-8 shadow-md shrink-0">
      
      {/* 上部ブロック（ロゴ・アイコン・ナビゲーション） */}
      <div className="w-full flex flex-col gap-3 md:gap-6">
        
        {/* ヘッダー部分（モバイル：横並びで上部をさらにコンパクトに） */}
        <div className="flex items-center justify-between border-b border-slate-700 pb-2 md:flex-col md:items-start md:justify-start md:border-b-0 md:pb-0 md:gap-4">
          <h1 className="text-xl font-bold tracking-wide">Next Tasks</h1>
          
          {/* アイコン（モバイル時は右上に固定） */}
          <div className="shrink-0 scale-90 md:scale-100 origin-right md:origin-left">
            <Icon />
          </div>
        </div>

        {/* タブメニュー */}
        <div className="w-full">
          <NaviList />
        </div>
      </div>

      {/* 下部ブロック（ログアウトボタン） */}
      <div className="mt-3 pt-2 border-t border-slate-700 md:mt-auto md:border-t-0 md:pt-0">
        <GoogleLogout />
      </div>
      
    </aside>
  );
};

export default SideMenu;