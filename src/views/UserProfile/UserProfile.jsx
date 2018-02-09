import React from 'react';
import {
    Grid, InputLabel,
} from 'material-ui';

import {
    ProfileCard, RegularCard, Button, CustomInput, ItemGrid
} from 'components';

import avatar from 'assets/img/faces/marc.jpg';

class UserProfile extends React.Component{
    render(){
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={8}>
                        <RegularCard
                            headerColor="orange"
                            cardTitle="Create New User"
                            cardSubtitle="Fill in all available fields"
                            content={
                                <div>
                                     <Grid container>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="First Name"
                                                id="first-name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Last Name"
                                                id="last-name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Username"
                                                id="username"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Email address"
                                                id="email-address"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Mobile Number"
                                                id="mobile"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <CustomInput
                                                labelText="Position"
                                                id="position"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    disabled: false
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                            footer={
                                <Button color="info" onClick="signUp()">Create</Button>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                        <ProfileCard
                            avatar={avatar}
                            subtitle="CEO / CO-FOUNDER"
                            title="Alec Thompson"
                            description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                            footer={
                                <Button color="info" round>Follow</Button>
                            }
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

export default UserProfile;
