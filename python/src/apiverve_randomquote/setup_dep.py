from setuptools import setup, find_packages

setup(
    name='apiverve_randomquote',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Random Quote fetches a random quote and its author attribution on every call. Send a GET request without parameters to receive quote text ready for displays, dashboards, or daily messages.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/randomquote?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
