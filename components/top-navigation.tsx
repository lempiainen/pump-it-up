interface Props {
    title: string;
    action?: () => {}
  }

export default function TopNavigation({title, action}: Props){
    return (
        <div>
            {!action ? null : <span className="button" data-testid="action" onClick={action}>←</span> }
            <h3 data-testid="title" className="text-lg font-semibold py-8">{title}</h3>
        </div>
    );
}