const MainContainer = ({ children, className = "" }) => {
    return (
        <section
            className={`py-12 bg-gray-50 max-w-7xl mx-auto px-4 ${className}`}
        >
            {children}
        </section>
    );
};

export default MainContainer;
