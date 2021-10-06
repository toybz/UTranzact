import useAuth from "../hooks/useAuth";

export default function Header({
  pageTitle,
  leftItem,
  titleItem,
  rightItem,
  hideSideBar = true,
  sticky = true,
}) {
  const colorClass = sticky ? "-sticky" : "header-white";

  const { signOut } = useAuth();

  return (
    <header className={`main_haeder header-sticky multi_item  ${colorClass} `}>
      {leftItem ? leftItem() : <div />}

      {titleItem ? (
        titleItem()
      ) : (
        <div className="title_page">
          <h1 className="page_name">{pageTitle}</h1>
        </div>
      )}

      {rightItem ? (
        rightItem()
      ) : (
        <div className="em_side_right">
          <span
            onClick={signOut}
            className="link__forgot d-block size-14 color-primary text-decoration-none hover:color-secondary transition-all"
          >
            Sign out
          </span>
        </div>
      )}
    </header>
  );
}
