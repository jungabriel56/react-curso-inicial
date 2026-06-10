import PageLayoutStyles from "./PageLayout.module.css";

interface IPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, children }: IPageLayoutProps) => {
  return (
    <div className={PageLayoutStyles.PageLayoutContainer}>
      <div className={PageLayoutStyles.PageContent}>
        <div>
          <h1>{title}</h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};
