import useTranslation from '../hooks/useTranslation'

function withMyHook(Component) {
    return function WrappedComponent(props) {
      const { locale, t } = useTranslation()
      return <Component {...props} locale={locale} />;
    }
}

export default withMyHook