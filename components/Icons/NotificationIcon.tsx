import React from "react";

interface Props {
	className: string;
}

class NotificationIcon extends React.Component<Props> {
	render() {
		return (
			<svg
				className={this.props.className}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				width="20"
				height="20"
			><path fill="white" d="M256 0H192V51.2C119 66 64 130.6 64 208v88L0 368v48H448V368l-64-72V208c0-77.4-55-142-128-156.8V0zm32 448H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
		);
	}
};

export default NotificationIcon;
