import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../action/profile';

const EditProfile = ({
	profile: { profile, loading },
	createProfile,
	getCurrentProfile,
	history,
}) => {
	const [formData, setFormData] = useState({
		company: '',
		status: '',
		website: '',
		contact: '',
		location: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
	});

	const [displaySocialInputs, toggleSocialInputs] = useState(false);

	useEffect(() => {
		getCurrentProfile();

		setFormData({
			company: loading || !profile.company ? '' : profile.company,
			status: loading || !profile.status ? '' : profile.status,
			contact: loading || !profile.contact ? '' : profile.contact,
			location: loading || !profile.location ? '' : profile.location,
			githubusername:
				loading || !profile.githubusername ? '' : profile.githubusername,
			bio: loading || !profile.bio ? '' : profile.bio,
			twitter: loading || !profile.social ? '' : profile.social.twitter,
			linkedin: loading || !profile.social ? '' : profile.social.linkedin,
			facebook: loading || !profile.social ? '' : profile.social.facebook,
			instagram: loading || !profile.social ? '' : profile.social.instagram,
		});
	}, [loading]);

	const {
		company,
		status,
		contact,
		location,
		githubusername,
		bio,
		twitter,
		facebook,
		linkedin,
		instagram,
	} = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history, true);
	};

	return (
		<Fragment>
			<h1 className='large text-primary'>Create Your Profile</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Let's get some information to make your
				profile stand out
			</p>
			<small>* = required field</small>
			<form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
					<select name='status' value={status} onChange={e => onChange(e)}>
						<option value='0'>* Select Professional Status</option>
						<option value='Developer'>Developer</option>
						<option value='Junior Developer'>Junior Developer</option>
						<option value='Senior Developer'>Senior Developer</option>
						<option value='Manager'>Manager</option>
						<option value='Intern'>Intern</option>
						<option value='Other'>Other</option>
					</select>
					<small className='form-text'>
						Give us an idea of where you are at in your career.
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Company'
						name='company'
						value={company}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						Could be our own Company or Company that you worked for{' '}
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Contact'
						name='contact'
						value={contact}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						Please provide your contact number
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Location'
						name='location'
						value={location}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						Street & city suggested (eg. No. 01, St. Alban's Place, Colombo 4)
					</small>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Github Username'
						name='githubusername'
						value={githubusername}
						onChange={e => onChange(e)}
					/>
					<small className='form-text'>
						If you want your latest repos and a Github link, include your
						username
					</small>
				</div>
				<div className='form-group'>
					<textarea
						placeholder='A short bio of yourself'
						name='bio'
						value={bio}
						onChange={e => onChange(e)}
					>
						{' '}
					</textarea>
					<small className='form-text'>Tell us a little about yourself</small>
				</div>

				<div className='my-2'>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn btn-light'
					>
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>

				{displaySocialInputs && (
					<Fragment>
						<div class='form-group social-input'>
							<i class='fab fa-linkedin fa-2x'></i>
							<input
								type='text'
								placeholder='Linkedin URL'
								name='linkedin'
								value={linkedin}
								onChange={e => onChange(e)}
							/>
						</div>

						<div class='form-group social-input'>
							<i class='fab fa-twitter fa-2x'></i>
							<input
								type='text'
								placeholder='Twitter URL'
								name='twitter'
								value={twitter}
								onChange={e => onChange(e)}
							/>
						</div>

						<div class='form-group social-input'>
							<i class='fab fa-facebook fa-2x'></i>
							<input
								type='text'
								placeholder='Facebook URL'
								name='facebook'
								value={facebook}
								onChange={e => onChange(e)}
							/>
						</div>

						<div class='form-group social-input'>
							<i class='fab fa-instagram fa-2x'></i>
							<input
								type='text'
								placeholder='Instagram URL'
								name='instagram'
								value={instagram}
								onChange={e => onChange(e)}
							/>
						</div>
					</Fragment>
				)}

				<input type='submit' className='btn btn-primary my-1' />
				<Link className='btn btn-light my-1' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</Fragment>
	);
};

EditProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(EditProfile)
);
